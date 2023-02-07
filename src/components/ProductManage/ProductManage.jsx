import { DeleteOutlined} from '@ant-design/icons';
import { Button, Divider, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { apiDeleteProduct} from '../../api/products';
import { getAllProduct } from '../../redux/actions/productAction';
import FormMoldal from '../FormMoldal/FormMoldal';
import TableComponent from '../TableComponent/TableComponent';


const ProductManage = () => {
  const [isFormMoldelOpen, setIsFormModalOpen] = useState(false)
  const [rowSelected, setRowSelected] = useState();
  const [isModelOpenDelete, setIsModelOpenDelete] = useState(false);
  const dispatch = useDispatch()
  const IsFormModalOpen = () => setIsFormModalOpen(false)
  
  const renderAction = () => {
    let render = (
      <span className='space-x-3'>
        <DeleteOutlined className='text-lg hover:text-red-600 cursor-pointer text-blue-600' onClick={() => setIsModelOpenDelete(true)} />
      </span>
    )
    return render
  }


  //columsn table

  const columns = [

    {
      title: 'Collection',
      dataIndex: 'collectionName',

    },
    {
      title: 'Category',
      dataIndex: 'category',

    },
    {
      title: 'Name',
      dataIndex: 'name',


    },
    {
      title: 'Giá',
      dataIndex: 'price',
      sorter: (a, b) => a.price = b.price

    },
    {
      title: 'Size',
      dataIndex: 'size',

    },
    {
      title: 'Màu',
      dataIndex: 'color',

    },
    {
      title: 'Kho',
      dataIndex: 'amount',
    },
    {
      title: 'Code',
      dataIndex: 'code',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: renderAction
    },
  ]

  //api all product

  const { allProducts } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  const dataTable = allProducts?.length && allProducts?.map((item, index) => {
    return {
      ...item,
      key: item._id
    }
  })

  // delete produc

  const handleCancelDelete = () => setIsModelOpenDelete(false);

  
  const handleDeleteProduct = async () => {
    const res = await apiDeleteProduct(rowSelected)
    if (res?.data.err === 0) {
      dispatch(getAllProduct())
      setIsModelOpenDelete(false)
      toast.success(res.data.msg)
    }

  }

  return (
    <div className='relative'>
      <div className={`absolute right-[-101%] w-full z-10 ${isFormMoldelOpen ? 'translate-x-[-100%]' : 'translate-x-0'} ease-in-out duration-1000 `}>
        <FormMoldal IsFormModalOpen = {IsFormModalOpen}/>
      </div>
      <h1 className='font-semibold'>Quản lý Sản phẩm</h1>
      <Divider />
      <Button
        className='h-[50px] uppercase font-semibold'
        onClick={() => setIsFormModalOpen(true)}
      >
        Thêm  Sản phẩm</Button>
      <Divider />

      <TableComponent columns={columns} data={dataTable} onRow={(record, rowIndex) => {
        return {
          onClick: (event) => { setRowSelected(record._id) },
        };
      }} />
      <Modal title='Xóa Sản Phẩm' open={isModelOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
        <div>
          Bạn có chắc chắn xóa sản phẩm này?
        </div>
      </Modal>
    </div>
  )
}

export default ProductManage