import { Button, Divider, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../../redux/actions/adminAction';
import { path } from '../../../untils/path';

const LoginPage = () => {

  
  const dispatch = useDispatch();
  const { isLogging } = useSelector(state => state.admin);
  const navigate = useNavigate();

  const onFinish = (e) => {
    dispatch(loginAdmin(e));
  }
  
  useEffect(() => {
    isLogging && navigate(path.ADMIN)
  }, [isLogging, navigate])

  return (

    <div className='h-screen flex items-center justify-center bg-gradient-to-r from-gray-600 to-black '>
      
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ 
          maxWidth: 600,
          background: '#ffff',
          padding: '1.5rem',
          borderRadius: '10px',
          }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h1 className='text-2xl text-center mb-3 uppercase font-bold'>Đăng nhập</h1>
        <Divider />
        <Form.Item
        label='Email'
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder='Email' type='email' />
        </Form.Item>

        <Form.Item
          label= "Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder='Mật khẩu'/>
        </Form.Item>
        <Divider />
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="default" danger htmlType="submit" >
            Đăng nhập
          </Button>
        </Form.Item>
  
      </Form>
    </div>
  )
}

export default LoginPage
