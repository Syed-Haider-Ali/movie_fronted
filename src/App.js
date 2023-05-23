import React from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// import Header from './components/Header'
import Navbar from './components/Navbar'
import Dashboard from './adminPages/Dashboard'
import Login from './adminPages/Login'
import Register from './adminPages/Register'
import AddMovie from './adminPages/AddMovie'
// import CBA from './adminPages/Cba'

// from client
import Home from './pages/Home'
// import './CSS/index.css'
import MovieDetails from './components/MovieDetails'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import ActionMovies from './pages/ActionMovies'
import ComedyMovies from './pages/ComedyMovies'
import ThrillerMovies from './pages/ThrillerMovies'
import AnimeMovies from './pages/AnimeMovies'
import DramaMovies from './pages/DramaMovies'
import CrimeMovies from './pages/CrimeMovies'
import HorrorMovies from './pages/HorrorMovies'
import InvestorRelations from './pages/InvestorRelations'
import HelpCentre from './pages/HelpCentre'
import Contact from './pages/ContactPage'
import About from './pages/AboutPage'
import EncVideo from './pages/EncVideo'
import SimpleVideo from './pages/SimpleVideo'
// import AddMovie from './adminComponents/AddMovie'
// import './CSS/index.css'
// export const UserContext = createContext()




function App() {
  return (
    <>
      <Router>
        {/* <div className='container'> */}
          <Navbar/>
          <div className='adminContainer'>
          <Routes>
            <Route path='/panel' element={<Dashboard/>} />
            <Route path='/panel/addmovie' element={<AddMovie/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
           </Routes>
            </div> 

          <Routes> 
             {/* all routes from client */}
           <Route path='/encvideo' element={<EncVideo/>}/>

           <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/investors' element={<InvestorRelations/>}/>
            <Route path='/help' element={<HelpCentre/>}/>

            <Route path='/movies/action' element={<ActionMovies/>}/>
            <Route path='/movies/comedy' element={<ComedyMovies/>}/>
            <Route path='/movies/thriller' element={<ThrillerMovies/>}/>
            <Route path='/movies/anime' element={<AnimeMovies/>}/>
            <Route path='/movies/drama' element={<DramaMovies/>}/>
            <Route path='/movies/crime' element={<CrimeMovies/>}/>
            <Route path='/movies/horror' element={<HorrorMovies/>}/>

            <Route path='movie/:title' element={<MovieDetails/>}/>
            <Route path='/admin/addmovie' element={<AddMovie/>}/>

            <Route path='/video' element={<SimpleVideo/>}/>

            {/* <Route path='/admin' element={<AdminLogin/>}/> no longer needed - bcoz fo DJANGO */}
            {/* <Route path='/admin/users' element={<Users/>}/>  no longer needed */}

            {/* <Route path='*' element={<NotFound/>}/> 
             {/* above routes from client */}
          
          </Routes>
      </Router>
      <ToastContainer/>
      <Footer/>
    </>
  );
}

export default App;
