import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cart, history, category, shopData}) => {
  console.log(cart)
  console.log(history)
  return (
    <div className="cart">
      <div>CART</div>
      <button onClick={() => history.goBack()}>Back to {category}</button>
      <div>Did you remember your <Link to='/supplies'>Supplies</Link> and <Link to='/extras'>Extras</Link>?</div>
      {cart.map((item, i) => {
        console.log(item);
        return (
          <Fragment key={i}>
            <div>{item.product}</div>
            {Object.keys(item.order).map((size, i) => {
              let a = shopData[item.type].items.find(x => x.name === item.product)
              if (item.order[size] > 0)
                return (<div key={size}>
                          Size: {size}
                          x{item.order[size]}
                          ${a.prices[i]*item.order[size]}
                        </div>)
            })}
          </Fragment>
        )
      })}
    </div>
    

  )
}

export default Cart;