import axios from 'axios'
import {BACKEND_API} from "../global_variables"

export const http = axios.create({
    baseURL: BACKEND_API,
})

/* При каждом запросе добавляем в headers token */
// http.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//     return config;
// })



