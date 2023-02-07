import { Button, Menu } from 'antd';
import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import AdminManage from '../../components/AdminManage/AdminManage';
import ProductManage from '../../components/ProductManage/ProductManage';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAdmin } from '../../redux/actions/adminAction';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Amin', 'admin', <MailOutlined />),
    getItem('Sản phẩm', 'product', <AppstoreOutlined />),
];


const AdminPage = () => {
    const [keySelected, setKeySelected] = useState('admin');
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {admin} = useSelector(state => state.admin)


    const renderPage = (key) => {
        switch (key) {
            case 'admin':
                return <AdminManage />
            case 'product':
                return <ProductManage />
            default:
                return;
        }
    }



    const handleLogout = () => {

        dispatch(logoutAdmin())
        navigate('/login')

    }
    const handleClick = ({ key }) => {
        setKeySelected(key)
    }
   

    return (
        <div className='font-sans'>
            <div className='flex justify-between px-6 py-3 bg-blue-700 items-center gap-4'>
                <div className='flex gap-4'>
                    <h1 className='uppercase font-semibold text-white m-0'>Hệ thống</h1>
                    <h1 className='uppercase text-white cursor-pointer hover:text-red-600' onClick={() => navigate('/')}>Quay lại trang chủ</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-white'>
                        Hello
                        <span className='mx-3'>{admin}</span>
                    </p>
                    <Button type='default' danger onClick={handleLogout}>Logout</Button>
                </div>
            </div>
            <div className='flex'>
                <div className='uppercase' >
                    <Menu
                        mode="inline"
                        style={{
                            width: 256,
                            height: "100vh",
                            boxShadow: '1px 1px 2px #ccc'

                        }}
                        items={items}
                        onClick={handleClick}
                    />

                </div>
                <div className='p-4 w-full'>
                    {renderPage(keySelected)}
                </div>
            </div>

        </div>
    )
}

export default AdminPage
