import React from 'react'

const Tour = ({id,image,info,name,price}) => {
  return (
    <div>
        <img src={image} alt={name}/>
        <h4>{name}</h4>
        <h3>${price}</h3>
        <button>Delete Place</button>
    </div>
  )
}

export default Tour