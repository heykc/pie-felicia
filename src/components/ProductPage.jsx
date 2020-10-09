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
  console.log(props)

  // find the order in the cart that matches the product name
  let prevCartOrder = props.cart.find(item => item.product === props.productName);
  // previous order is the order key from the cart or a zero-filled object
  let prevOrder = prevCartOrder?.order || zeroFillOrder(props.data.sizes, props.productName);

  const [order, setOrder] = useState(prevOrder);
  const [size, setSize] = useState('');

  useEffect(() => {
    console.log('prevOrder',prevOrder)
  })
  const changeCart = () => {
    console.log(order)
    if (size && order[size]) {
      props.changeCart(order, props.productName)
      setSize('');
    }
  }

  return (
    <div className="product-page">
      <TopNav history={props.history}/>
      <button onClick={changeCart}>Add to Cart</button>
      {props.data.name}
      <Rating rating={props.data.rating} 
              changeRating={props.changeRating}
              category={props.category}
              product={props.productName} 
      />
      <div className="item-counter">
        <span className="material-icons-round" 
              onClick={() => {
                size &&
                // this is not the same format as the cart. change this to match
                setOrder({
                  ...order,
                  [size]: order[size] - 1
                });
              }}>
          remove_circle
        </span>
        {/* not working because the order I get from the cart is different than the order I set in this component */}
        <span>{order[size] || 0}</span>
        <span className="material-icons-round" 
              onClick={() => {
                size &&
                // this is not the same format as the cart. change this to match
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
        <div key={i} onClick={() => {console.log('setting size'); setSize(size)}}>
          {size}{props.data.prices[i]}
        </div>
      ))}
    </div>
  )
}

export default ProductPage;