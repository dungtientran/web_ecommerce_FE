
import { Image } from 'antd';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailsAction } from '../../redux/actions/productAction';
import InfoProduct from '../InfoProduct'

const DetailProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailsAction(id))
    }, [dispatch, id])

    const { detailsProduct } = useSelector(state => state.products)

    return (
        <div>
            <div className='flex flex-col justify-center md:flex-row pt-[200px] md:justify-between px-3 md:px-[70px]'>
                <div className=' md:w-[70%] px-[70px] flex flex-wrap justify-center items-center gap-10'>
                    {detailsProduct?.images?.map((item, index) => (
                        <div className='md:w-[48%]' key={index}>
                            <Image src={item} alt="" className='w-full object-contain' />
                        </div>
                    ))}
                   
                </div>
                <div className='md:w-[50%] lg:w-[30%]'>
                    <InfoProduct inforProduct={detailsProduct} checkImage={false} />
                </div>

            </div>
        </div>

    )
}

export default DetailProduct
