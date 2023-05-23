import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import '../CSS/Admin.css'


const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/panel')
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetter</Link>
        </div>


        <NavDropdown title="Browse" id="navbarScrollingDropdown" className='ml-3' style={{minWidth: '400px'}}>
            <div className='row row-cols-2'>
              <div className='col'>
                <div className='row'><NavDropdown.Item href="/movies/action">Action</NavDropdown.Item></div>
                <div className='row'><NavDropdown.Item href="/movies/comedy">Comedy</NavDropdown.Item></div>
                <div className='row'><NavDropdown.Item href="/movies/anime">Anime</NavDropdown.Item></div>
                <div className='row'><NavDropdown.Item href="/movies/horror">Horror</NavDropdown.Item></div>
              </div>

              <div className='col'>
              <div className='row'><NavDropdown.Item href="/movies/drama">Drama</NavDropdown.Item></div>
                <div className='row'><NavDropdown.Item href="/movies/crime">Crime</NavDropdown.Item></div>
                <div className='row'><NavDropdown.Item href="/movies/thriller">Thriller</NavDropdown.Item></div>
              </div>
            </div>

              {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-center' disabled style={{color:'gray'}}> Movie House </NavDropdown.Item>
            </NavDropdown>


        <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
    )
}

export default Header