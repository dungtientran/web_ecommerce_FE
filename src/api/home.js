import axios from '../axios';

export const getHome = async() => {
    return await axios.get('/api/home/gethome')
}