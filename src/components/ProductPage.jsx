import React, { useState, useEffect } from 'react';

import TopNav from './TopNav';
import Rating from './Rating';

/**
 * @summary Creates an object from the sizes array and fills values with 0s
 * 
 * @param {array} arr
 * 
 * @return {object} Returns the object created 
 */

const zeroFillOrder = (arr) => {
  let obj = {};
  arr.forEach(item => obj[item] = 0);
  return obj;
}

/**
 * @summary     Creates a page to display the product
 * @description Allows the user to change the rating and order by size
 * 
 * @param {object} props 
 */

const ProductPage = (props) => {
  // find the order in the cart that matches the product name
  let prevCartOrder = props.cart.find(item => item.product === props.productName);
  // previous order is the order key from the cart or a zero-filled object
  let prevOrder = prevCartOrder?.order || zeroFillOrder(props.data.sizes, props.productName);

  // state for current order
  const [order, setOrder] = useState(prevOrder);
  // state for size selection
  const [size, setSize] = useState('');

  const changeCart = () => {
    // must be a selected size an amount > 0
    if (size && order[size]) {
      // change the cart
      props.changeCart(order, props.productName)
      // clear the size selection
      setSize('');
    }
  }

  return (
    <div className="product-page">
      <TopNav history={props.history}/>
      <button onClick={changeCart}>Add to Cart</button>
      {/* product name */}
      {props.data.name}
      <Rating rating={props.data.rating} 
              changeRating={props.changeRating}
              category={props.category}
              product={props.productName} 
      />
      {/* add/remove items */}
      <div className="item-counter">
        <span className="material-icons-round" 
              onClick={() => {
                // must have a size to set the order amount
                size &&
                setOrder({
                  ...order,
                  [size]: order[size] - 1
                });
              }}>
          remove_circle
        </span>
        {/* reflect the amount for the current order 
            initial render has no size selected, so a 0 is displayed*/}
        <span>{order[size] || 0}</span>
        <span className="material-icons-round" 
              onClick={() => {
                // must have a size to set the order amount
                size &&
                setOrder({
                  ...order,
                  [size]: order[size] + 1
                });
              }}>
          add_circle
        </span>
      </div>
      {props.data.description}
      {props.data.sizes.map((size, i) => (
        // display all available sizes
        // clicking sets the size
        <div key={i} onClick={() => setSize(size)}>
          {size}{props.data.prices[i]}
        </div>
      ))}
    </div>
  )
}

export default ProductPage;