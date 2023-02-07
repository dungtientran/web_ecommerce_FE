import axios from '../axios';

export const adminLogin = (data) => {
    return axios.post('/api/user/login', data)
}

export const getAllAdmin = () => {
    return axios.get('/api/user/getAll')
}

export const apiCreateAdmin = (data) => {
    return axios.post('/api/user/create', data)
}
export const apiDeleteAdmin = (data) => {
    return axios.delete('/api/delete-admin', data)
}