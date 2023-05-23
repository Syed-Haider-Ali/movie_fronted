import axios from 'axios'

const BASE_URL = "https://movie-backend-sepia.vercel.app/"
const POST_URL = `${BASE_URL}movie/`
const GET_URL = `${BASE_URL}movies/`


// Create new movie
const createMovie = async (movieData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(POST_URL, movieData, config)
  return response.data
}

// Get Movies
const getMovies = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(GET_URL, config)
  return response.data
}

// Delete Movie
const deleteMovie = async (MovieId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(POST_URL + MovieId, config)

  return response.data
}


const movieService = {
    createMovie,
    getMovies,
    deleteMovie,
  }
  
  export default movieService