import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const CartComponent = () => {

    const { listCart } = useSelector(state => state.products);
    const [numble, setNumber] = useState();

    console.log(listCart)

    const hadleAdd = () => {
        setNumber(numble + 1)
    }
    const haldlePrev = () => {

        setNumber(numble - 1)
        if (numble === 1) setNumber(1)
    }


    return (
        <div className='w-[40%] m-auto h-screen pt-[250px] text-white'>
            <p className='text-3xl text-center mb-[50px]'>Giỏ mua hàng</p>
            <ul className='w-full  p-0'>
                <li className='flex list-none border-b-[1px] border-white' >
                    <p className='w-[10%] text-left'>Sản phẩm</p>
                    <div className='w-[30%]'></div>
                    <div className='flex w-[60%]'>
                        <p className='w-[50%] text-right'>Giá</p>
                        <p className='w-[25%] text-center' >Số lượng</p>
                        <p className='w-[25%] text-right'>Tổng</p>
                    </div>
                </li>

                {listCart?.map((item, index) => (
                    <li key={index} className='flex list-none w-full mt-4'>
                        <div className='w-[10%]'>
                            <img src={item?.image} alt='' className='w-[90%]' />
                        </div>
                        <div className='w-[30%]'>
                            <p>{item?.name}</p>
                            <p>{item?.color}</p>
                        </div>
                        <div className='flex w-[60%] justify-between'>
                            <p className='w-[50%] text-right'>{item?.price}₫</p>
                            <div className='w-[25%] flex justify-center items-start' >
                                <div className=' bg-black border-[1px] flex items-end ml-3 px-3 w-[80%] '>
                                    <button disabled onClick={haldlePrev} className='uppercase text-3xl cursor-pointer' >-</button>
                                    <input type="text" disabled className='h-8 w-8 outline-none bg-black text-white text-center' value={item?.amountBuy} onChange={(e) => setNumber(e.target.value)} />
                                    <button disabled onClick={hadleAdd} className='uppercase text-3xl cursor-pointer' >+</button>
                                </div>
                            </div>
                            <p className='w-[25%] text-right'>{Number(item?.price) * Number(item?.amountBuy)}₫</p>
                        </div>
                    </li>
                ))}
                <li className='border-t-[1px] border-b-[1px] border-white py-8 mt-10'>
                    <div className='flex justify-between'>
                        <p>Tổng thanh toán</p>
                        <p>150000</p>
                    </div>
                </li>

                <li className='py-8 flex justify-center items-center'>               
                        <button className='uppercase py-2 px-1 hover:bg-white hover:text-black duration-500'>Thanh toán</button>
                </li>

            </ul>
        </div>
    )
}

export default CartComponent
