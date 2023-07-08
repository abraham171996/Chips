import React from 'react'

const ShopCart = ({price,count,name,pitcure}) => {
  return (
    <>
    <li >
        
        <p>{count}</p>
        <p>{price}</p>
        <h3>{name}</h3>
        <img src={pitcure} alt=""  style={{objectFit:"cover",width:"20px",height:"20px"}}/>
    </li>
    </>
  )
}

export default ShopCart