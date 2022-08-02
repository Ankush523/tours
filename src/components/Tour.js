import React, { useState } from 'react'

const Tour = ({id,image,info,name,price,removeTour}) => {
    const[readMore,setReadMore] = useState(false)
  return (
    <div>
        <img src={image} alt={name}/>
        <h4>{name}</h4>
        <h3>${price}</h3>
        <p>{readMore ? info : info.substring(0,200)}
        <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}
        </button>
        </p>
        <button onClick={() => removeTour(id)}>Delete Place</button>
    </div>
  )
}

export default Tour