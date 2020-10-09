import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * @summary Prints the order
 * 
 * @param {array} cart
 * @param {object} history
 * @param {string} category
 * @param {object} shopData 
 */
const Cart = ({cart, history, category, shopData}) => {
  let orderTotal = 0;

  /**
   * @summary Summarizes the cart for easy access
   * 
   * @param {array} cartArr The cart for the app
   */

  const cartComb = (cartArr) => {
    let arr = [];

    cartArr.forEach(cartItem => {
      let subtotal = 0;
      let itemCount = 0;
      const {order, product: productName, type} = cartItem;
      Object.keys(order).forEach((size, i) => {
        let amount = order[size];
        itemCount += amount;
        let shopItem = shopData[type].items.find(x => x.name === productName);
        let sizeTotal = shopItem.prices[i] * amount;
        orderTotal += sizeTotal;
        subtotal += sizeTotal;      
      })
      arr.push({
        'name': productName,
        'totalCost': subtotal,
        'itemCount': itemCount,
        'order': order
      })
    })

    return arr;
  }

  let details = cartComb(cart);
  return (
    <div className="cart">
      <div>CART</div>
      <button onClick={() => history.goBack()}>Back to {category}</button>
      <div>Did you remember your <Link to='/supplies'>Supplies</Link> and <Link to='/extras'>Extras</Link>?</div>
      {/* look through the details */}
      {details.map((x, i) => {
        return (
          <Fragment key={i}>
            <div>{x.name} ........ {x.itemCount}</div>
            <>
              {/* for every possible order */}
              {Object.keys(x.order).map((y, j) => {
                // check if the amount is > 0
                if (x.order[y] > 0)
                  return (
                    // display the size and amount
                    <div key={j}>
                      {y} ........ {x.order[y]}
                    </div>
                  )
              })}
            </>
            <div>{x.totalCost}</div>
          </Fragment>
        )
      })}

      <div>{orderTotal}</div>
    </div>
  )
}

export default Cart;