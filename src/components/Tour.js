import React, { useState } from 'react'

const Tour = ({id,image,info,name,price,removeTour}) => {
    const[readMore,setReadMore] = useState(false)
  return (
    <div className='flex flex-col p-4 bg-slate-200 my-[40px]'>
        <img className='w-[400px] h-[250px] rounded-xl ml-[515px]' src={image} alt={name}/>
        <br/>
        <div className='flex flex-row items-between justify-around mx-[500px]'>
        <h4 className='text-[20px] text-purple-900'>{name}</h4>
        <h4 className='text-[20px] text-sky-400'>${price}</h4>
        </div>
        <br/>
        <p className='mx-[500px]'>{readMore ? info : info.substring(0,200)}
        <button className='text-sky-600' onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}
        </button>
        </p>
        <br/>
        <button className='bg-pink-400 w-[300px] h-[30px] ml-[550px] rounded-md text-white' onClick={() => removeTour(id)}>Delete Place</button>
        <br/>
    </div>
  )
}

export default Tour