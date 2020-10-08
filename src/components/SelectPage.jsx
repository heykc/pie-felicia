import React, {Fragment} from 'react';

import Rating from './Rating';

/**
 * @summary     A selection page for choosing store products.
 * @description Uses data from App to display products from a certain category.
 * 
 * @param {object} data The category data passed from App 
 */

const SelectPage = ({data}) => {
  console.log(data)
  return (
    <>
      <div className="select-page">
        Select {data.category}
        {data.filters?.map(filter => <div key={filter} id={filter}>{filter}</div>)}
        
        {data.items.map((item, i) => {
          return (
            <Fragment key={item.name}>
              <div>{item.name}</div>
              <Rating rating={item.rating} />
            </Fragment>
          )
        })}

        <div>cart</div>
      </div>
    </>
  )
}

export default SelectPage;