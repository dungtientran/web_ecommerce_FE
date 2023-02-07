import React from 'react'
import InfoProduct from './InfoProduct'
import SliderShow from './SliderShow/SliderShow'

const FeaturedProducts = ({number, images, inforProduct, imageHome}) => {

 
 
    return (
        <div className='lg:flex'>
            <div className=' lg:w-[70%] px-[70px]'>
                <SliderShow number={number} images={images} />
            </div>
            <div className=' lg:w-[30%]'>
                <InfoProduct inforProduct = {inforProduct} checkImage={true} imageHome = {imageHome}/>
            </div>
        </div>
    )
}

export default FeaturedProducts
