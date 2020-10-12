import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import SideNav from './SideNav';
import Rating from './Rating';

import '../styles/CategoryPage.scss';

/**
 * @summary     A selection page for choosing store products.
 * @description Uses data from App to display products from a certain category.
 * 
 * @param {object} data The category data passed from App 
 */

const CategoryPage = ({data, changeCategory}) => {
  // set the current category when page loads
  // used for the cart component to display 'back to `category`'
  useEffect(() => {
    changeCategory(data.category);
  })

  return (
    <div className="category-page">
      <SideNav />
      <div className="main">
        <div className="title">Select {data.category}</div>
        {/* display filters if category has them */}
        <div className="filter">
          {data.filters?.map(filter => (
            <div key={filter} className="filter-item">
              <img src={require(`../assets/${filter} filter.svg`)} />
            </div>))}
        </div>
        {/* look through all items in category */}
        <div className="cards">
          {data.items.map((item, i) => {
            return (
              // display a product card for each product
              <Link key={item.name} to={`/${data.category}/${item.name}`} className="product-card">
                <div>
                  <div className="circles">
                    <span className="before"></span>
                    <span className="after"></span>
                  </div>
                  <img src={require(`../assets/${item.name}.svg`)} alt={`${item.name} image`}/>
                  <div className="name">{item.name}</div>
                  <Rating rating={item.rating} />
                  <div className="desc">{item.description}</div>
                  <div className="prices">
                    {/* display min and max prices OR
                        display flat product price */}
                    {item.sizes.length > 1 ?
                      <>
                        <span>$</span>{item.prices[0]} - <span>$</span>{item.prices[item.prices.length - 1]}
                      </>
                      :
                      <span>{item.prices[0]}</span>}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        

        <div className="cart-container">
          <Link to='/cart'>
            <div className="material-icons-outlined cart">shopping_cart</div>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default CategoryPage;