
import { Button, Col, Divider, Form, Input, Row, Select } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import axios from '../../axios';
import React, { useState } from 'react'
import { apiUpLoadImages } from '../../api/products';
import { toast } from 'react-toastify';
import { getAllProduct } from '../../redux/actions/productAction';
import { useDispatch } from 'react-redux';

const FormMoldal = ({ IsFormModalOpen }) => {

    const [collectionName, setCollectionName] = useState();
    const [imgPreview, setImgPreview] = useState([]);

    const dispatch = useDispatch()
    
    // const handleOnchangeImage = async ({ fileList }) => {
    //     const list = []
    //     fileList.forEach(async item => {
    //         const file = item
    //         if (!file.url && !file.preview) {
    //             file.preview = await getBase64(file.originFileObj)
    //             list.push(file.preview)
    //         }
    //         setImgPreview(list)
    //     })
    // }

    const handeleUploadImage = async(e) => { 
        let images = []
        const files = e.target.files
        const formData = new FormData()
        for (let i of files) {
            formData.append('file', i)
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_ASSETS_NAME)
            const res = await apiUpLoadImages(formData)
            if(res.status === 200)  images = [...images, res.data.secure_url]
        } 
        setImgPreview(images)
    }

    const handleCreateProduct = async (e) => {
        e.images = imgPreview
        const res = await axios.post('/api/product/create', e)
        if(res.data.err === 0) {
            IsFormModalOpen()
            dispatch(getAllProduct())
            toast.success(res.data.msg)
        }else{
            toast.success(res.data.msg)
        }
    }

    return (
        <div className='bg-slate-300 rounded-md p-4 w-full shadow-xl'>
            <div className='flex items-center gap-8'>
                <button onClick={() => IsFormModalOpen()}>Tho??t</button>
                <h1 className='text-2xl'>Th??m s???n ph???m</h1>
            </div>
            <Divider />
            <Form
                className='text-black'
                onFinish={handleCreateProduct}
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}

            >
                <Row >

                    <Col span={12}>
                        <div className='flex gap-3'>
                            <Form.Item
                                name='collectionName'

                                rules={[
                                    {
                                        required: true,
                                        message: 'Kh??ng ???????c b??? tr???ng',
                                    },
                                ]}
                            >

                                <Select defaultValue='Collection' name='collectionName' onChange={(e) => setCollectionName(e)}>
                                    <Select.Option value="jewelry">Jewelry</Select.Option>
                                    <Select.Option value="accessories">Accessories</Select.Option>
                                    <Select.Option value="watch">Watch</Select.Option>
                                </Select>

                            </Form.Item>

                            {collectionName === 'jewelry' && (
                                <Form.Item
                                    name='category'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Kh??ng ???????c b??? tr???ng',
                                        },
                                    ]}>

                                    <Select defaultValue='Category'>
                                        <Select.Option value="v??ng tay">V??ng tay</Select.Option>
                                        <Select.Option value="d??y chuy???n">D??y chuy???n</Select.Option>
                                        <Select.Option value="nh???n">Nh???n</Select.Option>
                                        <Select.Option value="khuy??n tai">Khuy??n tai</Select.Option>
                                    </Select>

                                </Form.Item>
                            )}
                        </div>
                        <Form.Item
                            label='Name'
                            name='name'
                            rules={[
                                {
                                    required: true,
                                    message: 'Kh??ng ???????c b??? tr???ng',
                                },
                            ]}
                        >
                            <TextArea className='text-black' />
                        </Form.Item>

                        <div className='flex gap-2 justify-between'>
                            <Form.Item
                                label='Gi??'
                                name='price'
                                type='number'

                                rules={[
                                    {
                                        required: true,
                                        message: 'Kh??ng ???????c b??? tr???ng',
                                    },
                                ]}
                            >
                                <Input type='number' className='text-black' />
                            </Form.Item>
                            <Form.Item
                                label='Size'
                                name='size'

                            >
                                <Input className='text-black' />
                            </Form.Item>

                            <Form.Item
                                label='Color'
                                name='color'
                            >
                                <Input className='text-black' />
                            </Form.Item>
                            <Form.Item
                                label='S??? l?????ng'
                                name='amount'
                            >
                                <Input className='text-black' />
                            </Form.Item>
                        </div>
                    </Col>

                    <Col span={12}>
                        <Form.Item name='images' >
                            <input type='file' onChange={handeleUploadImage} multiple name='images'>
                            </input>
                            <div className='flex gap-5'>
                                {imgPreview && imgPreview?.map((item, index) => (

                                    <img key={index} src={item} alt='' className='w-[40px]' />
                                ))}
                            </div>

                        </Form.Item>
                    </Col>


                </Row>
                <Form.Item
                    label='Mi??u t???'
                    name='description'
                >
                    <TextArea className='text-black' />
                </Form.Item>
                <Button type="default" htmlType="submit" danger className='text-black'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default FormMoldal