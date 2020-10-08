import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';

import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';

import {shop} from '../data/shop';

/**
 * @summary     The encompassing App component.
 * @description Uses Routes to point to different paths in the app.
 */

const App = () => {
  const [shopData, setShopData] = useState(shop);
  const [cart, setCart] = useState([]);

  const changeRating = (category, product, newRating) => {
    setShopData(prevShopData => {
      prevShopData[category].items.forEach((item, i) => {
        if (item.name === product)
          prevShopData[category].items[i].rating = newRating;
      })
      return prevShopData;
    })
  }

  const changeCart = (product, size, amount) => {
    setCart(prevCart => {
      prevCart.forEach(item => {
        if (item.name === product)
          item.order[size] = amount;
      })
      return prevCart;
    })
  }

  return (
    <>
      <Switch>
        <Route exact
               path='/:category'
               render={(routerProps) => {
                 const category = routerProps.match.params.category
                 return <CategoryPage data={shopData[category]} cart={cart}/>
               }}
        />
        <Route path='/:category/:product'
               render={(routerProps) => {
                 const category = routerProps.match.params.category
                 const product = routerProps.match.params.product;
                 const history = routerProps.history;
                 const props = {category, product, history};
                 let data = {};
                 shopData[category].items.forEach(item => {
                   if (item.name === product)
                    data = item;
                 })
                 return <ProductPage data={data} 
                                     {...props}
                                     changeRating={changeRating}
                                     changeCart={changeCart} 
                                     cart={cart}/>
               }}
        />
      </Switch>
    </>
  );
}

export default App;
