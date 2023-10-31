import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Feature from './pages/Feature'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/feature' element={<Feature />} />
      </Routes>
    </div>
  )
}

export default App
