import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/productReview.css'

const ProductReview = ({productReview}) => {
  return (
    <div className='productReview'>
      {
        productReview.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review}/>
        ))
      }
    </div>
  )
}

export default ProductReview
