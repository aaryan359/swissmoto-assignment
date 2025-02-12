import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3999/api',  
   
});

export default api;
