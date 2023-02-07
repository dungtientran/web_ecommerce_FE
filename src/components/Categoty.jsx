import React from 'react';
import { useSelector } from 'react-redux';

const Categoty = () => {

    const { listCategory } = useSelector(state => state.homeData);

    return (
        <div className='bg-[#111111] flex flex-row justify-between items-center px-[100px]'>
            {listCategory?.map((item, index) => (
                <div key={index} className='basis-1/4'>
                    <h5>{item.category}</h5>
                </div>
            ))}
        </div>
    )
}

export default Categoty
