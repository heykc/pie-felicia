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
      <div className="select-page">
        Select {data.category}
        {data.filters?.map(filter => <div key={filter}>{filter}</div>)}
        
        {data.items.map(item => {
          return <div key={item}>{item.name}</div>
        })}
      </div>
    </>
  )
}

export default SelectPage;