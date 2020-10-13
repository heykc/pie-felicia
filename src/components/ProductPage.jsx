import React, { useState } from 'react';

import TopNav from './TopNav';
import Rating from './Rating';

import '../styles/ProductPage.scss';

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
      props.changeCart(order, props.productName, props.category)
      // clear the size selection
      setSize('');
    }
  }

  return (
    <div className="product-page">
      <div className="background"></div>
      <TopNav history={props.history}/>
      <div className="atc">
        <img src={require(`../assets/${props.data.name}.svg`)} />
        <button onClick={changeCart}>Add to Cart</button>
      </div>
      
      {/* product name */}
      <div className="product-details">
        <div className="name">{props.data.name}</div>
        <div className="rating-counter">
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
        </div>
      
      
        <div className="desc">{props.data.description}</div>
      </div>
      
      <div className="size-selection">
        <div className="title">Size</div>
        <div className="sizes">
          {props.data.sizes.map((size, i) => (
            // display all available sizes
            // clicking sets the size
            <div key={i} className="size-selector" onClick={() => setSize(size)}>
              <span className="size">{size}</span>
              <span className="price"><span className="dollar">$</span>{props.data.prices[i]}</span>
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
  )
}

export default ProductPage;