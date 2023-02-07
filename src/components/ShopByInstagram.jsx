import { Card } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const ShopByInstagram = () => {

    const { shopbyinstagram } = useSelector(state => state.homeData)

    return (
        <div className='pt-[100px]'>
            <h3 className='text-white uppercase text-center'>Shop by Instagram</h3>
            <div className='flex items-center justify-between pb-[100px]'>
                {shopbyinstagram?.map((item, index) => (
                    <div
                        key={index}
                        className='w-[600px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden py-16 cursor-pointer'
                    >
                        <img
                            src={item}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopByInstagram
