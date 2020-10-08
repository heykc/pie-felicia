import React from 'react';

import TopNav from './TopNav';

const ProductPage = (props) => {
  console.log(props)
  return (
    <div className="product-page">
      <TopNav />
    </div>
  )
}

export default ProductPage;