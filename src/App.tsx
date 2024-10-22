
import './styles/App.scss'
import React, { useEffect, useState } from 'react'
import SignIn from './components/logIn/SignIn'
import SignUp from './components/logIn/SignUp'
import { PostProvider } from './components/PostContext/PostContext'
import Header from './components/burger/Header'
import Modal from './components/Modal/Modal'
import RouterComponent from './RouterComponent'
import SearchBar from './components/SearchBar/SearchBar'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { RootState, store } from './redux/store'
import { PostModal } from './components/Modal/PostModal'
import { BrowserRouter, Router, useNavigate } from 'react-router-dom'
import { loginSuccess, logout } from './redux/authReducer'


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const isLoggedIn = useSelector((state: RootState) => !!state.auth.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')

    if (token && username ) {
      dispatch(loginSuccess({ token, username })) 
    }
  }, [dispatch])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }

  const handleLogin = () => {
    // isLoggedIn(true)
    setShowLoginModal(false)
    navigate('/profile')
  }

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/signin')
  }

  const openLoginModal = () => {
    setShowLoginModal(true)
  }

  const closeLoginModal = () => {
    setShowLoginModal(false)
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <PostProvider>
            <div className="App">
            <Header 
                isMenuOpen={isMenuOpen} 
                toggleMenu={toggleMenu} 
                toggleForm={openLoginModal}
                isLoggedIn={isLoggedIn} 
                handleLogout={handleLogout} />
              <Modal show={showLoginModal} onClose={closeLoginModal}>
                {isSignUp ? (
                  <SignUp toggleForm={toggleForm} onLogin={handleLogin} />
                ) : (
                  <SignIn toggleForm={toggleForm} onLogin={handleLogin} />
                )}
              </Modal>
              <main>
                <RouterComponent isSignUp={isSignUp} toggleForm={toggleForm} onLogin={handleLogin} />
              </main>
            </div>
        </PostProvider>
      {/* </BrowserRouter> */}
   </>
  )
}

export default App



