import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Classes from './components/Classes/Classes'
import About from './components/About/About'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Error from './components/Error/Error'
import Profile from './components/Profile/Profile'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
export default function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/classes' element={<Classes />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/profile/:username' element={<Profile />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
      <Footer />
    </Router>
    </>
  );
}
