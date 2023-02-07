import React, { useEffect, useState } from 'react'
import { apiAllProducts, apiGetCollection } from '../../api/products'
import CartItem from '../CartItem/CartItem'
import { useLocation, useParams } from 'react-router-dom'


const ListCartItem = () => {
    const { id } = useParams()

    const [page, setPage] = useState(0)
    const [listCart, setListCart] = useState([])
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')

    const fetchProduct = async () => {
        const res = await apiAllProducts(page, sort, search, id)
        if (res.data.err === 0) {
            setListCart((prev) => [...prev, ...res.data.data])
        }
    }
    const fetchProductClection = async () => {
        const res = await apiGetCollection(id)
        if (res.data.err === 0) {
            setListCart(res.data.data)
        }
    }

    useEffect(() => {
        if(id === 'all'){
            fetchProduct()
        }else{
            fetchProductClection()
        }
       
    }, [page, sort, search, id])

    const handleScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollHeight + 1000 >= document.documentElement.scrollTop) {
                setPage((prev) => prev + 1)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    function refreshPage(){
        window.location.reload();
    } 


    return (
        <div>
            <CartItem listCart={listCart} />
            {listCart.length === 0 && (
                <div className='h-screen'>
                    <p className='text-4xl text-white'>Chưa có hàng</p>
                </div>
            )}
        </div>
    )
}

export default ListCartItem
