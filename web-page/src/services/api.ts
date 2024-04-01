import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL as string,
})
const isRefreshing = false


api.interceptors.request.use(function (config) {
  const token = isRefreshing
    ? localStorage.getItem('access_token')
    : null
  if (config.headers) {
    (config.headers)['Authorization'] = 'Bearer ' + token
  }
  return config
})


export default api
