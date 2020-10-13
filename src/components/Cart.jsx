import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Cart.scss';


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
    <div className="cart-page">
      <div className="back" onClick={() => history.goBack()}>
        <span className="material-icons-round">keyboard_arrow_left</span>
        <span>Back to <span className="cat">{category}</span></span>
      </div>
      <div className="remember">Did you remember your <Link to='/supplies'>Supplies</Link> and <Link to='/extras'>Extras</Link>?</div>
      <div className="receipt">
        <div className="receipt-info">
          {/* look through the details */}
          {details.map((x, i) => {
            return (
              <Fragment key={i}>
                <div className="item-name-row">
                  <span className="item-name">{x.name}</span>
                  <span className="item-quantity">x{x.itemCount}</span>
                </div>
                <>
                  {/* for every possible order */}
                  {Object.keys(x.order).map((y, j) => {
                    // check if the amount is > 0
                    if (x.order[y] > 0)
                      return (
                        // display the size and amount
                        <div key={j} className="item-order-row">
                          <span>{y}</span>
                          <span className="item-order-quantity">x{x.order[y]}</span>
                        </div>
                      )
                  })}
                </>
                <div className="subtotal">
                  <span className="subtotal-title">Subtotal</span>
                  <span className="subtotal-price">+${x.totalCost}</span>
                </div>
              </Fragment>
            )
          })}
        </div>
       

        <div className="cart-total">
          <span>
            <span className="dollar">$</span>
            {orderTotal}
          </span>
          <div className="material-icons-outlined icon">shopping_cart</div>
        </div>
      </div>
      

      
    </div>
  )
}

export default Cart;