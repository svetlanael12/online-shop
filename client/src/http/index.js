import axios from 'axios';

//запросы, не требующие авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: "json",
})

//запросы, требующие авторизации
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    responseType: "json",
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}