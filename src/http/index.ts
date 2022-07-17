import axios from 'axios'

export const http = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API,
    withCredentials: true
})

/* При каждом запросе добавляем в headers token */
http.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})



