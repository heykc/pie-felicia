import React from 'react';



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