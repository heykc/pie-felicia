import React, { useState } from 'react';


/**
 * @summary A component to render stars based on rating
 * 
 * @param {number} rating The rating of the product
 * 
 * @return {HTML} Returns an array of filled/unfilled stars according to the rating passed in
 */

const Rating = (props) => {
  const [rating, setRating] = useState(props.rating);

  /**
   * @summary Allows the changing of the product's rating
   * 
   * @param {string} category 
   * @param {string} product 
   * @param {number} newRating 
   */
  
  const changeRating = (category, product, newRating) => {
    // re-render component with new rating reflected
    setRating(newRating);

    // set shopData with new product rating
    props.changeRating(category, product, newRating);
  }

  const category = props.category;
  const product = props.product;
  

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
    <div className="rating">
      {ratings.map((el, i) => {
        return <div key={i} 
                    className={el.class} 
                    onClick={props.changeRating ? 
                               () => changeRating(category, product, i+1)
                               :
                               null
                            }
               >
                {el.icon}
               </div>
      })}
    </div> 
  );
}

export default Rating;