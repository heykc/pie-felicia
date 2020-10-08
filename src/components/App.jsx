import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SideNav from './SideNav';
import SelectPage from './SelectPage';

import {shop} from '../data/shop';

/**
 * @summary     The encompassing App component.
 * @description Uses Routes to point to different paths in the app.
 */

const App = () => {
  return (
    <>
      <SideNav />
      <Switch>
        <Route path={['/pies', '/coffees', '/extras', '/supplies']}
               render={(routerProps) => {
                 const category = routerProps.location.pathname.substring(1);
                 return <SelectPage data={shop[category]} />
               }}
        />
      </Switch>
    </>
  );
}

export default App;
