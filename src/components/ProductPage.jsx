import React from 'react';

import TopNav from './TopNav';
import Rating from './Rating';

const ProductPage = (props) => {
  console.log(props)
  return (
    <div className="product-page">
      <TopNav />
      {props.data.name}
      <Rating rating={props.data.rating} />
      {props.data.description}
      {props.data.sizes.map((size, i) => (
        <div key={i}>
          {size}{props.data.prices[i]}
        </div>
      ))}
    </div>
  )
}

export default ProductPage;