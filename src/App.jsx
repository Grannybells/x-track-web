// Import specific elements from the 'react-router-dom' library.
import { Route, Routes } from 'react-router-dom';

// Import various components and pages from their respective locations.
import Welcome from './pages/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Feature from './pages/Feature';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      {/* Render the navigation bar component */}
      <NavBar />
      <Routes>
        {/* Define routes for your application */}
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
