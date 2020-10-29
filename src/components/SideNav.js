import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import '../styles/SideNav.scss';

/**
 * @summary     Displays the side navigation panel for the app.
 * @description A navigation on the left side of the screen that includes: 
 *              (main menu, search, pies, coffees, extras, supplies).
 */

const SideNav = ({category}) => {
  return (
    <div className="side-nav">
      <div className="nav-icons">
        <div className="material-icons icon">apps</div>
        <div className="material-icons-round icon">search</div>
      </div>
      
      <div className="categories">
        <Link to='/pies' className={category === 'pies' ? 'active' : ''}>pies</Link>
        <Link to='/coffees' className={category === 'coffees' ? 'active' : ''}>coffees</Link>
        <Link to='/extras' className={category === 'extras' ? 'active' : ''}>extras</Link>
        <Link to='/supplies' className={category === 'supplies' ? 'active' : ''}>supplies</Link>
      </div>
    </div>
  )
}

export default SideNav;