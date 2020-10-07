import React from 'react';

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
      <div>{data.category}</div>
    </>
  )
}

export default SelectPage;