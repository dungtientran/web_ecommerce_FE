import React from 'react'
import './CartItem.css'
const CartItem = ({ listCart }) => {
    return (
        <div className='grid grid-cols-3 gap-8'>
            {listCart?.map((item, index) => (
                <div key={index} className='text-white relative cardBox cursor-pointer'>
                    <div  className='card-hover-1  '>
                        <div>
                            <img src={item?.images[0]} alt="" />
                        </div>
                        <div className='mt-4'>
                            <p>{listCart?.name}</p>
                            <small>{Number(item?.price)?.toLocaleString()}₫ </small>
                        </div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 w-full card-hover-2 '>
                        <div>
                            <img src={item?.images[1]} alt="" />
                        </div>
                        <div className='border-[1px] border-white py-2 mt-2'>
                            <button className='w-full bg-black h-full uppercase'>Xem nhanh</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItem
