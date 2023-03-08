import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { SlHandbag } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { isOpenAction } from '../../redux/actions/isOpenAction';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { listColection } = useSelector(state => state.homeData)
    const [fix, setFix] = useState(false);
    const {listCart} = useSelector(state => state.products)
 
    const setFixed = () => {
        if (window.scrollY > 100) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener('scroll', setFixed);



    return (
        <div className={!fix ? 'text-white hover:bg-[#111111] top-0 right-0 left-0 z-10 w-full fixed' : 'text-white hover:bg-[#111111] fixed top-0 right-0 left-0 z-10 w-full translate-y-[-100%] ease-in-out duration-1000'}>
            <div className='h-[40px] bg-[#000] hover:bg-gray-800  text-white flex justify-center items-center uppercase text-[13px] cursor-pointer'>
                Trần Tiến Dũng - 08/03/2023
            </div>
            <div>
                <p>AKAKAKAKAKA</p>
            </div>
            <div className='flex flex-row bg-none py-[20px] justify-around lg:justify-between text-[16px] relative'>
                <div className='lg:hidden lg:w-1/6 p-3 cursor-pointer'>
                    <MenuOutlined />
                </div>
                <NavLink to={'/'} className='w-full sm:basis-1/6 flex justify-center items-center '>
                    <img src="https://cdn.shopify.com/s/files/1/0644/2958/8701/files/logo_500x.png?v=1652960279" alt="" className='w-[130px]' />
                </NavLink>
                <div className='basis-4/6  gap-2 m-auto items-center justify-center uppercase hidden sm:hidden md:hidden lg:flex '>
                    <div className='flex'>
                        {listColection?.map((item, index) => (
                            <div key={index} className='px-[18px] py-[20px]'
                                >
                                <span
                                    onClick={() => navigate(`/collection/${item?.key.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(' ').join('-')}`)}
                                    className='ttd-navbar-item'
                                   
                                >
                                    {item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='basis-1/6 text-center sm:flex items-center sm:gap-4 hidden '>
                    <BsSearch size={30} className='cursor-pointer hover:text-red-600 transition-colors' onClick={() => dispatch(isOpenAction(true))} />
                    <div className='relative cursor-pointer hover:text-red-600 transition-colors' onClick={() => navigate('/cart')}>
                        <SlHandbag size={30} />
                        <small className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-20%]'>{listCart?.length}</small>
                    </div>
                    <Button type='primary' size='sm' className='ml-2 text-white' danger onClick={() => navigate('/login')} >LOGIN</Button>
                </div>
            </div>
        </div>
    )
}

export default Header