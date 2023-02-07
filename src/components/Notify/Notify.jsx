import React from 'react'
import { useSelector } from 'react-redux'

const Notify = () => {

    const {msg, admin} = useSelector(state => state.admin)



    return (
        <div>
            <div className=' w-[300px] h-[100px] bg-[#111111]  px-8 py-2 border-t-[0.1px] border-white rounded-md'>
                <div className='flex justify-between items-center'>
                    <p>Đã thêm vào giỏ hàng</p>
                    <p className='cursor-pointer' >X</p>
                </div>
                <div>
                    {admin}
                </div>

            </div>
            {/* <p>{inforProduct?.name}</p>
                <p>{inforProduct?.price}đ</p> */}
        </div>
    )
}

export default Notify