import { useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getMovies, reset ,deleteMovie} from '../features/movies/movieSlice'
import '../CSS/Admin.css'

import Card from '../components/Card'



const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { movies, isLoading, isError, message } = useSelector(
    (state) => state.movies
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }
    dispatch(getMovies())

    // return() => {dispatch(reset())}   // not working >_<
      
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  const movieMap = movies.map((i)=>{
    return(<>
        <div class="col-sm-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{i.title} - {i.year}</h5>
              <p class="card-text">Cast: {i.hero}, {i.heroine}</p>
              <p>{new Date(i.createdAt).toLocaleString('en-US')}</p>
              <button className="btn btn-primary" onClick={() => dispatch(deleteMovie(i._id))}>Delete</button>
            </div>
          </div>
       </div>
        </>)
  })

  return (
  <>

      <div class="split-1 left-1">
          <table>
              <tr>
                <Link to='/panel/addmovie'><p className='linkOne'>Add Movie</p></Link>
              </tr>
              <tr>
                <Link to='/panel/update'><p className='linkOne'>Update</p></Link>
              </tr>
              {/* <tr>
                <Link to='/panel/delete'><p className='linkOne'>Remove Movie</p></Link>
              </tr> */}
          </table>
      </div>

           <section className='heading'>

          <h1>Welcome {user && user.name}</h1>
          </section>

          <br/>
          {/* {movieMap} */}
          <div class="row">
            {movieMap}
          </div>

</>
  )
}

export default Dashboard