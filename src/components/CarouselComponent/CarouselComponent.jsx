import React from 'react'
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';


const CarouselComponent = () => {
    const { banner } = useSelector(state => state.homeData);
    return (
        <Carousel
        effect='fade'
            autoplay
            style={{ height: '100vh', width: '100%', overflow: 'hidden' }}
        >
            {banner?.map((item, index) => (
                <div key={index}>
                    <img src={item} alt="" className='w-full object-cover h-screen' />
                </div>
            ))}


        </Carousel>
    )
}

export default CarouselComponent
