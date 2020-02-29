import axios from 'axios'

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
})

AxiosInstance.defaults.withCredentials = true

export default AxiosInstance
