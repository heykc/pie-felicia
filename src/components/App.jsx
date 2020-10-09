import React, { useState, useEffect } from 'react';
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

  const changeCart = (orderObj, productName) => {
    let cartObj = {
      product: productName,
      order: orderObj
    }
    setCart(prevCart => {
      let prevOrder = prevCart.find(item => item.product === productName);
      if (!prevOrder) {
        prevCart.push(cartObj);
      }
      else {
        prevCart.forEach((item, i) => {
          if (item.product === productName) {
            prevCart[i] = cartObj;
          }
        })
      }

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
                 const productName = routerProps.match.params.product;
                 const history = routerProps.history;
                 const props = {category, productName, history};
                 let data = shopData[category].items.find(item => item.name === productName);
                 
                 return <ProductPage data={data} 
                                     {...props}
                                     changeRating={changeRating}
                                     changeCart={changeCart}
                                     cart={cart}
                        />
               }}
        />
      </Switch>
    </>
  );
}

export default App;
