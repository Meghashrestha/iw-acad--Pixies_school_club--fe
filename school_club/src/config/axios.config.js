import axios from 'axios';

const api = axios.create({
    // baseURL: `127.0.0.1:8000/`,
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const getRequest = (url) => {
    return api.get(url)
}

export const postRequest = (url, data) => {
    return api.post(url, data)
}  

export const putRequest = (url, data) => {
    return api.put(url, data)
}

export const patchRequest = (url, data) => {
    return api.patch(url, data)
}

export const deleteRequest = (url) => {
    return api.delete(url)
}