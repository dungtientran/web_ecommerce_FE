
import { Image } from 'antd';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailsAction } from '../../redux/actions/productAction';
import InfoProduct from '../InfoProduct/InfoProduct'
import Loading from '../LoadingComponent/Loadingt';

const DetailProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { detailsProduct, isGetDetails } = useSelector(state => state.products)


    useEffect(() => {
        dispatch(getDetailsAction(id))
        window.scroll(0, 0)
    }, [dispatch, id])


    return (
        <div>
            <Loading isLoading={!isGetDetails} >
                <div className='flex flex-col justify-center md:flex-row pt-[200px] md:justify-between px-3 md:px-[70px]'>
                    <div className=' md:w-[70%] px-[70px] grid grid-cols-2 gap-10'>
                        {detailsProduct?.images?.map((item, index) => (
                            <div className='' key={index}>
                                <Image src={item} alt="" className='w-full object-contain' />
                            </div>
                        ))}
                    </div>
                    <div className='md:w-[50%] lg:w-[30%]'>
                        <InfoProduct inforProduct={detailsProduct} checkImage={false} />
                    </div>
                </div>
            </Loading>
        </div>

    )
}

export default DetailProduct
