import './App.css'
import { useContext } from 'react'
import { BrowserRouter as Router, Navigate } from 'react-router-dom'

import Chat from './pages/Chat'
import Index from './pages/Index'
import { Routes, Route } from 'react-router-dom'
import Talk from './pages/Talk'
import Live from './pages/Live'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { AuthContext } from './context/AuthContext'
import Home from './pages/home/Home'
import Messenger from './pages/messenger/Messenger'
import Header from './components/Header'

function App() {
  const { user } = useContext(AuthContext)
  // console.log(user)

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={user ? <Home/> : <Register/>}/>
          <Route path="/login" 
          element={user ? <Navigate to ="/"/> : <Login/>}
          // element={<Login/>}
          />
          <Route path="/register" element={user ? <Navigate to ="/"/> : <Register/>}/>
          <Route path="/messenger" element={<><Chat/><Messenger/></>}/>
        </Routes>
      </>
    </Router>
  )
}

export default App
