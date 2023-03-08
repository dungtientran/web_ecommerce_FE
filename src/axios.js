import axios from 'axios';
const sever_URL = 'https://heliosweb.onrender.com';

const instance = axios.create({
    // baseURL: process.env.REACT_APP_SERVER_URL
    baseURL : sever_URL
}) 


export default instance