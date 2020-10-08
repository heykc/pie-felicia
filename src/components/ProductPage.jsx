import React from 'react';

import TopNav from './TopNav';
import Rating from './Rating';
import ItemCounter from './ItemCounter';

const ProductPage = (props) => {
  return (
    <div className="product-page">
      <TopNav history={props.history}/>
      {props.data.name}
      <Rating rating={props.data.rating} 
              changeRating={props.changeRating}
              category={props.category}
              product={props.product} />
      <ItemCounter />
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