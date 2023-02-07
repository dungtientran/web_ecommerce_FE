import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getAllProduct } from '../../redux/actions/productAction';

import Manege from './Manege';
import { Button } from 'antd'
import AdminPage from './AdminPage';

const Admin = () => {

  const [isOpenCreateProduct, setIsOpenCreateProduct] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])


  return (
    <div>

      <div className='flex bg-blue-700 items-center font-semibold uppercase'>
        <div className='px-4 py-2 bg-red-800'>Hệ thống</div>
        <div className='border-l-2 border-white px-4 py-2 cursor-pointer'>Quản lý sản phẩm</div>
        <div className='border-l-2 border-white px-4 py-2 cursor-pointer'>Quản lý đơn hàng</div>
      </div>
      <div>
        <h1 className='px-2 py-4 text-center mt-4 font-bold'>Quản Lý Sản Phẩm</h1>

        <div className='m-10 flex'>
          <div className='flex-none w-1/4'>
            <Button
              type='primary'
              onClick={() => setIsOpenCreateProduct(!isOpenCreateProduct)} >
              {!isOpenCreateProduct ? 'Thêm Mới Sản Phẩm' : 'Đóng'}
            </Button>
          </div>
          <div className={`flex w-3/4 justify-center ${!isOpenCreateProduct ? 'hidden' : 'block'}`}>
          
          </div>
        </div>
        <div className='w-[90%] m-auto'>
          <Manege />
        </div>
      </div>



      <div>
        <AdminPage />
      </div>
    </div>
  )
}

export default Admin
