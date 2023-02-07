import { DeleteOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { apiCreateAdmin, apiDeleteAdmin } from '../../api/adminLogin';
import TableComponent from '../TableComponent/TableComponent';
import { useDispatch, useSelector } from 'react-redux'
import { getAllAdminAction } from '../../redux/actions/adminAction';
import { toast } from 'react-toastify';

const AdminManage = () => {

    const [isModelOpenDelete, setIsModelOpenDelete] = useState(false);
    const dispatch = useDispatch()
    const { allAdmin } = useSelector(state => state.admin)
    const renderAction = () => {
        let render = (
            <span >
                <DeleteOutlined className='text-lg text-red-600 cursor-pointer hover:text-xl' onClick={() => setIsModelOpenDelete(true)} />
            </span>
        )
        return render
    }

    useEffect(() => {
        dispatch(getAllAdminAction())
    }, [dispatch])

    console.log(allAdmin)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: renderAction
        },
    ]

   

    const dataTable = allAdmin?.length && allAdmin?.map((item, index) => {
        return {
            ...item,
            key: item._id
        }
    })

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    const handleCreateAdmin = async (e) => {
          const res =  await apiCreateAdmin(e)
          console.log(res)
          if(res.data.err === 0) {
            setIsModalOpen(false)
            dispatch(getAllAdminAction())
            toast.success(res.data.msg)
          }else{
            toast.success(res.data.msg)
          }
    };


    const [rowSelected, setRowSelected] = useState()

    const hadleDelete = async () => {
        const data = { id: 3 }
        await apiDeleteAdmin(data)
    }

    const handleCancelDelete = () => setIsModelOpenDelete(false);

    const handleDeleteProduct = async () => {
        //     const res = await apiDeleteProduct(rowSelected)
        //     if (res?.data.err === 0) {
        //       dispatch(getAllProduct())
        //       setIsModelOpenDelete(false)
        //       toast.success(res.data.msg)
        //     }

    }


    return (

        <div className='space-y-5'>
            <h1 className='font-semibold'>Quản lý Admin</h1>
            <Divider />
            <Button
                className='h-[50px] uppercase font-semibold'
                onClick={() => setIsModalOpen(true)}
            >
                Thêm  Admin</Button>
            <Divider />
            <TableComponent columns={columns} data={dataTable} onRow={(record, rowIndex) => {
                return {
                    onClick: (event) => { setRowSelected(record.id) },
                };
            }} />
            <Modal title="Thêm Admin" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    className='text-black'
                    onFinish={handleCreateAdmin}
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                >
                    <Form.Item
                        label='Name'
                        name='name'
                        rules={[
                            {
                                required: true,
                                message: 'Không được bỏ trống',
                            },
                        ]}
                    >
                        <Input className='text-black' />
                    </Form.Item>
                    <Form.Item
                        label='Email'
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: 'Không được bỏ trống',
                            },
                        ]}
                    >
                        <Input className='text-black' type='email' />
                    </Form.Item>
                    <Form.Item
                        label='Mật khẩu'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Không được bỏ trống',
                            },
                        ]}
                    >
                        <Input className='text-black' />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className='text-black bg-red-700'>
                        Submit
                    </Button>
                </Form>
            </Modal>
            <Modal title='Xóa Sản Phẩm' open={isModelOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
                <div>
                    Bạn có chắc chắn xóa sản phẩm này?
                </div>
            </Modal>
        </div>
    )
}

export default AdminManage