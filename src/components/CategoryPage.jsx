import React from 'react';

import SideNav from './SideNav';
import Rating from './Rating';

/**
 * @summary     A selection page for choosing store products.
 * @description Uses data from App to display products from a certain category.
 * 
 * @param {object} data The category data passed from App 
 */

const CategoryPage = ({data}) => {
  console.log(data)
  return (
    <>
      <SideNav />
      <div className="select-page">
        Select {data.category}
        {data.filters?.map(filter => <div key={filter} id={filter}>{filter}</div>)}
        
        {data.items.map((item, i) => {
          return (
            <div className="product-card" key={item.name}>
              <div>{item.name}</div>
              <Rating rating={item.rating} />
              <div>{item.description}</div>
              <div>
                {item.sizes.length > 1 ?
                  <span>{item.prices[0]} - {item.prices[item.prices.length - 1]}</span>
                  :
                  <span>{item.prices[0]}</span>}
              </div>
            </div>
          )
        })}

        <div>cart</div>
      </div>
    </>
  )
}

export default CategoryPage;