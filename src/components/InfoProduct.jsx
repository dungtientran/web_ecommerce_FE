import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addCartAction } from '../redux/actions/productAction';
import { useNavigate } from 'react-router-dom'
import { CheckOutlined } from '@ant-design/icons'

const InfoProduct = ({ inforProduct, checkImage, imageHome }) => {

    const [numble, setNumber] = useState(1);
    const [isOpenModel, setIsOpenModel] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hadleAdd = () => {
        setNumber(numble + 1)
        if (numble === inforProduct?.amount) {
            setNumber(inforProduct?.amount)
        }
    }
    const haldlePrev = () => {
        setNumber(numble - 1)
        if (numble <= 1) setNumber(1)
    }

    const handleAddCart = () => {
        const addCart = {
            image: inforProduct?.images[0],
            name: inforProduct?.name,
            price: inforProduct?.price,
            amountBuy: numble
        }
        dispatch(addCartAction(addCart))
        setIsOpenModel(true)
    }

    return (
        <div className='lg:px-[50px] xl:px-[70px] pb-[30px] text-white relative'>
            <p className='py-2 text-gray-600'>Helios.vn</p>
            <h3 className='pb-2 text-3xl'>{inforProduct?.name}</h3>
            <p className='italic'>{Number(inforProduct?.price)?.toLocaleString()}₫</p>
            <div className='py-[24px]'>
                <div>
                    <span>Cỡ :  </span>
                    <span className='items-center italic'>
                        {inforProduct?.size}
                    </span>
                </div>
                <div className='my-4'>
                    <p className='italic'>{inforProduct?.amount || 200} trong kho</p>
                </div>
                <div className='flex md:flex-col lg:flex-row w-full gap-2 p-[24px] mt-4'>
                    <div className=' bg-black border-[1px] flex items-center justify-between px-4 gap-2 w-1/2 lg:w-1/3'>
                        <span className='uppercase text-3xl cursor-pointer' onClick={haldlePrev}>-</span>
                        <input type="text" className='h-8 w-8 outline-none bg-black text-white text-center' value={numble} onChange={(e) => e.target.value} />
                        <span className='uppercase text-3xl cursor-pointer' onClick={hadleAdd}>+</span>
                    </div>
                    <button className='outline-none py-3 bg-white text-black uppercase text-sm text-center lg:w-2/3 hover:bg-black hover:text-white duration-500' onClick={handleAddCart}>Thêm vào giỏ hàng</button>
                </div>
                <div className='px-6 mb-4'>
                    <button className='w-full bg-black hover:bg-white py-3 uppercase text-white hover:text-black duration-500'>buy it now</button>
                </div>
                <div>
                    <p className='text-justify'>
                        Nếu sản phẩm anh/chị quan tâm hiển thị hết hàng trên website. Vui lòng INBOX trực tiếp với Helios để được hỗ trợ nhanh nhất.
                        Xin chân thành cảm ơn!
                    </p>
                </div>
                <div className='mb-4'>
                    <span className='relative after:absolute after:-bottom-2 after:left-0 after:bg-white after:h-0.5 after:w-full'>
                        Mô tả
                    </span>
                </div>
                {imageHome ? (
                    <div >
                        <p className='py-2'>NEW ITEM - QUÝ MÃO</p>
                        <p className='py-2'>
                            {inforProduct?.title}
                        </p>
                        <div>
                            <img
                                src={imageHome}
                                alt=""
                                className='w-full object-cover'
                            />
                        </div>
                        <p className='py-4 underline cursor-pointer' onClick={() => navigate(`/product/${inforProduct?.id}`)}>Xem chi tiết sản phẩm</p>
                    </div>
                ) : (
                    <p className='py-2 text-justify'>
                        {inforProduct?.describe}
                    </p>
                )}
            </div>
            <div className={`absolute space-y-5 bg-[#111111] w-[400px] text-white z-50 p-4 bottom-[100%] ${isOpenModel ? 'translate-y-[70%] opacity-1 border-t-[1px] border-white' : 'translate-y-0 opacity-0'}  duration-500 ease-in-out`}>
                <div className='flex justify-between items-center border-b-[1px]'>
                    <p className='flex items-center gap-3'> <span className='mb-2'><CheckOutlined /></span> <span>Đã thêm vào giỏ hàng</span></p>
                    <p className='cursor-pointer' onClick={() => setIsOpenModel(false)}>X</p>
                </div>
                <div>
                    <p>{inforProduct?.name}</p>
                    <small className='italic'>{inforProduct?.price}đ</small>
                </div>
                <div className='flex justify-around items-center'>
                    <button className='md:w-[40%] px-4 text-sm py-2 uppercase bg-white text-black hover:bg-black hover:text-white duration-500' onClick={() => navigate('/cart')}>Xem giỏ hàng</button>
                    <button className='md:w-[40%] px-4 text-sm py-2 uppercase bg-black text-white hover:bg-white hover:text-black duration-500'>Thanh toán</button>
                </div>
            </div>
        </div>
    )
}

export default InfoProduct
