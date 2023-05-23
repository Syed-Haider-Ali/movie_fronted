import axios from 'axios'

const BASE_URL = "https://movie-backend-sepia.vercel.app/"
const REGISTER_URL = `${BASE_URL}admin/register/`
const LOGIN_URL = `${BASE_URL}admin/login/`

// Register user
const register = async (userData) => {
  const response = await axios.post(REGISTER_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}


const authService = {
    register,
    login,
    logout
  }
  
  export default authService