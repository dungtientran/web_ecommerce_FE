import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { apiGetAllProducts } from '../../api/products';

import './ListProductItem.css'

const ListProductItem = ({infor, productUi}) => {

    // const [page, setPage] = useState(0)
   
    // const fetchProduct = async () => {
    //     const res = await apiGetAllProducts(page)
    //     console.log(res.data.total)
    //     if (res.data.err === 0) {
    //         productUi(res.data.data)
    //     }
    // }

    // useEffect(() => {
    //     fetchProduct()
    // },[page])

    // const handleScroll = async () => {
    //     try {
    //         if (window.innerHeight + document.documentElement.scrollHeight + 1 >= document.documentElement.scrollTop) {
    //             setPage((prev) => prev + 1)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])


    return (
        <div className='text-white relative cardBox cursor-pointer'>
            <div className='card-hover-1  '>
                <div>
                    <img src={infor?.images[0]} alt=""   />
                </div>
                <div className='mt-4'>
                    <p>{infor?.name}</p>
                    <small>{Number(infor?.price)?.toLocaleString()}₫ </small>
                </div>
            </div>
            <div className='absolute top-0 left-0 right-0 w-full card-hover-2 '>
                <div>
                    <img src={infor?.images[1]} alt="" />
                </div>
                <div className='border-[1px] border-white py-2 mt-2'>
                    <button className='w-full bg-black h-full uppercase'>Xem nhanh</button>
                </div>
            </div>
        </div>
    )
}

export default ListProductItem
