import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

// Simulate delay from API
api.interceptors.request.use(
  async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
