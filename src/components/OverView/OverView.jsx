import React from 'react'
import SliderShow from '../SliderShow/SliderShow'

const OverView = ({title, images, number, check}) => {
    
  return (
    <div className=' px-[20px] sm:px-[70px] py-[80px]'>
      <h3 className='text-white uppercase mb-10 text-3xl'>
        {title || ''}
      </h3>
      <div>
        <SliderShow number={number} images ={images} check = {check}/>
      </div>
    </div>
  )
}

export default OverView
