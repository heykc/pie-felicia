import React from 'react';


/**
 * @summary A component to render stars based on rating
 * 
 * @param {number} rating The rating of the product
 * 
 * @return {HTML} Returns an array of filled/unfilled stars according to the rating passed in
 */


const Rating = ({rating}) => {
  let ratings = [];
  
  for (let i = 1; i <= 5; i++) {
    i <= rating ?
      ratings.push({
        class: 'material-icons-round',
        icon: 'star'
      })
      :
      ratings.push({
        class: 'material-icons-round',
        icon: 'star_border'
      })
  }

  return (
    <div key={rating+1} className="rating">
      {ratings.map((el, i) => {
        return <div key={i} className={el.class}>{el.icon}</div>
      })}
    </div> 
  );
}

export default Rating;