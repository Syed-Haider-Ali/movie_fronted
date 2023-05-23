import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Link from './Link'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'


function NavScrollExample() {

  const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/panel')
    }
  
  return (
    <Navbar bg="dark" className='navbar-dark' expand="lg">
      <Container fluid>
         <Navbar.Brand href='/'>{/* <Link href='/'>Movie House</Link>*/} Movie House</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Category" id="navbarScrollingDropdown" className='ml-3' style={{minWidth: '400px'}}>
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
                <div className='row'><NavDropdown.Item href="/encVideo">enc video</NavDropdown.Item></div>
                <div className='row'><NavDropdown.Item href="/video">Simple Stream</NavDropdown.Item></div>


              </div>
            </div>

              {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-center' disabled style={{color:'gray'}}> Movie House </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            
            <Nav>
        {user ? (
          <Nav.Link>
            <Link onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </Link>
          </Nav.Link>
        ) : (
          <>
            <Nav.Link className='me-2'>
              <Link className='me-2' to='/login'>
                <FaSignInAlt /> Login
              </Link>
              </Nav.Link>
            
              <Nav.Link className='me-2'>
              <Link className='me-2' to='/register'>
                <FaUser /> Register
              </Link>
              </Nav.Link>
          </>
        )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
