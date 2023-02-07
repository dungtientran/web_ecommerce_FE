import { Pagination, Spin } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { apiAllProducts, apiGetAllProducts, apiGetCollection } from '../api/products';
import FilterProduct from './FilterProduct/FilterProducts';
import ListProductItem from './ListProductItem/ListProductItem';





const ListProducts = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [listProduct, setListProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('')
    const { searchText } = useSelector(state => state.products)

    useEffect(() => {
        setIsLoading(true)
        const fetchProduct = async () => {
            const res = await apiAllProducts(page, sort, searchText, id, category)
            if (res.data.err === 0) {
                setListProduct(res.data.data)
                setIsLoading(false)
            }
        }
        fetchProduct()
    }, [id, page, sort, searchText, category])

    const productSort = (value) => setSort(value)
    const productCategory = (value) => setCategory(value)

    return (
        <div className=' text-white pt-[180px] my-[30px] '>
            <h1 className='text-center text-3xl'>Sản Phẩm</h1>

            <div className='pt-[30px] px-10 md:px-[70px] flex'>
                <div className=' w-[15%] hidden md:block flex-none px-[30px]'>
                    <FilterProduct collection={id} price={'price'} productSort={productSort} productCategory={productCategory} />
                </div>
                <div className=' w-[80%] px-[50px] pb-[50px] flex-none'>
                    {!isLoading && (
                        <div className='flex flex-col flex-non'>
                            <div className='grid grid-cols-2 lg:grid-cols-3 md:gap-5 md:px-10 flex-none'>
                                {listProduct?.map((item, index) => (
                                    <div key={index} onClick={() => navigate(`/product/${item?._id}`)}>
                                        <ListProductItem infor={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {listProduct?.length === 0 && (
                        <div className='h-screen basis-5/6'>
                            <h1>Chưa có sản phẩm</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default ListProducts
