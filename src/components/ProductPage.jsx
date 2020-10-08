import React from 'react';

import TopNav from './TopNav';
import Rating from './Rating';

const ProductPage = (props) => {
  console.log(props.cart)
  return (
    <div className="product-page">
      <TopNav history={props.history}/>
      {props.data.name}
      <Rating rating={props.data.rating} 
              changeRating={props.changeRating}
              category={props.category}
              product={props.product} />
      <div className="item-counter">
        <span className="material-icons-round">remove_circle</span>
        <span>0</span>
        <span className="material-icons-round">add_circle</span>
    </div>
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