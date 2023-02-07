import { Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const Checkout = () => {
    return (
        <div className='h-screen w-[50%] m-auto flex pt-[200px] text-white'>
            <div className='text-white w-[50%]'>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p className='text-blue-500'>Giỏ hàng </p>
                    <p>Thanh toán</p>
                </div>
                <div>
                    <Form
                        initialValues={{
                            remember: true
                        }}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}>

                        <Form.Item
                            style={{ color: "red" }}
                            label={<label style={{ color: "white" }}>Số điện thoại</label>}
                            name="phone"

                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder='Số điện thoại' type='text' />
                        </Form.Item>

                        <Form.Item
                            label={<label style={{ color: "white" }}>Địa chỉ giao hàng</label>}
                            name="adress"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <TextArea placeholder='Địa chỉ giao hàng' type='text' />
                        </Form.Item>

                        <div className='flex justify-between'>
                            <Form.Item
                                label={<label style={{ color: "white" }}>Tên</label>}
                                name="name"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder='Tên' type='text' />
                            </Form.Item>
                            <Form.Item
                                label={<label style={{ color: "white" }}>Họ</label>}
                                name="phone"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder='Họ' type='text' />
                            </Form.Item>
                        </div>
                            <Form.Item
                                label={<label style={{ color: "white" }}>Ghi chú</label>}
                                name="node"
                            >
                                <TextArea placeholder='Họ' type='text' />
                            </Form.Item>
                            <div className='flex justify-center'>
                            <Button className='text-white' size='large' danger>Thanh toán</Button>
                            </div>
                    </Form>
                </div>
            </div>
            <div className='w-[50%]'>
                right
            </div>
        </div>
    )
}

export default Checkout
