import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SelectPage from './SelectPage';
import ProductPage from './ProductPage';

import {shop} from '../data/shop';

/**
 * @summary     The encompassing App component.
 * @description Uses Routes to point to different paths in the app.
 */

const App = () => {
  return (
    <>
      <Switch>
        <Route exact
               path='/:category'
               render={(routerProps) => {
                 const category = routerProps.match.params.category
                 return <SelectPage data={shop[category]} />
               }}
        />
        <Route path='/:category/:product'
               render={(routerProps) => {
                 const category = routerProps.match.params.category
                 const product = routerProps.match.params.product;
                 let data = {};
                 shop[category].items.forEach(item => {
                   if (item.name === product)
                    data = item;
                 })
                 return <ProductPage data={data} {...routerProps}/>
               }}
        />
      </Switch>
    </>
  );
}

export default App;
