import React from 'react';
import {Link} from 'react-router-dom';



/**
 * @summary     Displays the side navigation panel for the app.
 * @description A navigation on the left side of the screen that includes: 
 *              (main menu, search, pies, coffees, extras, supplies).
 */

const SideNav = () => {
  return (
    <div className="side-nav">
      <div>apps</div>
      <div>search</div>

      <Link to='/pies'>pies</Link>
      <Link to='/coffees'>coffees</Link>
      <Link to='/extras'>extras</Link>
      <Link to='/supplies'>supplies</Link>
    </div>
  )
}

export default SideNav;