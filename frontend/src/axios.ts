import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:5173/',
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    const refreshToken = localStorage.getItem('refreshToken')
    if (error.status === 401 && refreshToken) {
      try {
        const response = await api.post('/auth/refresh', {
          refreshToken,
          credentials: 'include',
        })

        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('refreshToken', response.data.refreshToken)
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`

        return api(originalRequest)
      } catch {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        window.location.href = '/auth'
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  },
)

export default api
