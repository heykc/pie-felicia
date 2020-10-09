import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';

import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';
import Cart from './Cart';

import {shop} from '../data/shop';

/**
 * @summary     The encompassing App component.
 * @description Uses Routes to point to different paths in the app.
 */
const defaultCart = [
  {
    product: 'apple pie',
    type: 'pies',
    order: {
      '6"': 10,
      '8"': 0,
      '10"': 0,
      '12"': 2
    }
  },
  {
    product: 'caffe americano',
    type: 'coffees',
    order: {
      '1lb': 0,
      '5lbs': 0,
      '7lbs': 0,
      '10lbs': 9
    }
  }
];

const App = () => {
  const [shopData, setShopData] = useState(shop);
  const [cart, setCart] = useState(defaultCart);
  const [category, setCategory] = useState('');

  const changeRating = (category, product, newRating) => {
    setShopData(prevShopData => {
      prevShopData[category].items.forEach((item, i) => {
        if (item.name === product)
          prevShopData[category].items[i].rating = newRating;
      })
      return prevShopData;
    })
  }

  const changeCart = (orderObj, productName, category) => {
    let cartObj = {
      'product': productName,
      'type': category,
      'order': orderObj
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

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  }

  return (
    <>
      <Switch>
        <Route path='/cart'
               render={({history}) => <Cart cart={cart} history={history} category={category} shopData={shopData}/>}
        />
        <Route exact
               path='/:category'
               render={(routerProps) => {
                 const category = routerProps.match.params.category
                 return <CategoryPage data={shopData[category]} changeCategory={changeCategory}/>
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
