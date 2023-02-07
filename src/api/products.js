import axiosConfig from '../axios';
import axios from 'axios';


export const apiGetAllProducts = () => {
    return axiosConfig.get(`/api/product/get-all`)
}
export const apiAllProducts = ( page, sort, search,id, category) => {
    return axiosConfig.get(`/api/product/get-all?page=${page}&sort=${sort}&search=${search}&id=${id}&category=${category}`)
}
export const apiCreateProduct = (data) => {
    return axiosConfig.post('/api/product/create', data)
}
export const apiUpLoadImages = (images) => {
    return axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUND_NAME}/image/upload`, images)
}
export const apiGetDetailsProduct = (id) => {
    return axiosConfig.get(`/api/product/get-details/${id}`)
}
export const apiUpdateProduct = (id, data) => {
    return axiosConfig.put(`/api/update-product/${id}`, data)
}
export const apiDeleteProduct = (id) => {
    return axiosConfig.delete(`/api/product/delete/${id}`)
}
export const apiGetCollection = (collection, priceMin, priceMax) => {
    return axiosConfig.get(`/api/product/get-collection/${collection}?min=${priceMin}&max=${priceMax}`)
}

