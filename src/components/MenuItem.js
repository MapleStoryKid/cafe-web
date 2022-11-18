import React from 'react'

function MenuItem({image, name, price,detail}) {
  return (
    <div className="menuItem">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{price}원</p>
        <span>{detail}</span>
      
    </div>
  )
}

export default MenuItem
