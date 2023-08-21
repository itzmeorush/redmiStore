import React from 'react'
import '../styles/hotItem.css'
const HotItemCard = ({image,name,price,index}) => {
  return (
    <div className='hotItemCard'>
      <img src={image} alt={`${index} product`}/>
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default HotItemCard
