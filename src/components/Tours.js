import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
  return (
    <div>
        <h1 className='p-[20px] text-[40px]'>Our Places</h1>
        {
            tours.map((tour) => {
                return <Tour key={tour.id}{...tour}removeTour={removeTour}/>
            })
        }
    </div>
  )
}

export default Tours