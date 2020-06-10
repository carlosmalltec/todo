import axios from 'axios';
const api = axios.create({
    baseURL:'http://localhost:21081'
});
export default api;