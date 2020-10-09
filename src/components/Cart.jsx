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
  return (
    <div className="cart">
      <div>CART</div>
      <button onClick={() => history.goBack()}>Back to {category}</button>
      <div>Did you remember your <Link to='/supplies'>Supplies</Link> and <Link to='/extras'>Extras</Link>?</div>
      {/* look through the cart */}
      {cart.map((item, i) => {
        // pull cart data
        const {order, product: productName, type} = item;
        return (
          <Fragment key={i}>
            <div>{productName}</div>
            {/* look through the order */}
            {Object.keys(order).map((size, i) => {
              let amount = order[size];
              // allows access to prices
              let shopItem = shopData[type].items.find(x => x.name === productName);
              let total = shopItem.prices[i] * amount;
              // only display if ordered at least 1 of the sizes
              if (amount > 0)
                return (<div key={size}>
                          Size: {size}
                          x{amount}
                          ${total}
                        </div>)
            })}
          </Fragment>
        )
      })}
    </div>
    

  )
}

export default Cart;