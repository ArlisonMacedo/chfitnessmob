import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://192.168.100.22:3000/'
    // baseURL: 'http://192.168.1.70:3000/'
})