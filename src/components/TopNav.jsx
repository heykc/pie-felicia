import React from 'react';


/**
 * @summary     A top navigation for the ProductPage component
 * @description Creates an 'apps' and 'close' icon at the top of the ProductPage
 * 
 * @param {object} props 
 */

const TopNav = (props) => {
  return (
    <div className="top-nav">
      <div className="material-icons">apps</div>
      <div className="material-icons-round"
           onClick={() => props.history.goBack()}>close</div>
    </div>
  )
}

export default TopNav;