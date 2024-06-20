
import './styles/App.scss'
import React, { useState } from 'react'
import SignIn from './components/logIn/SignIn'
import SignUp from './components/logIn/SignUp'
import { PostProvider } from './components/PostContext/PostContext'
import Header from './components/burger/Header'
import Modal from './components/Modal/Modal'
import RouterComponent from './RouterComponent'
import SearchBar from './components/SearchBar/SearchBar'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { PostModal } from './components/Modal/PostModal'
import { BrowserRouter, Router } from 'react-router-dom'


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
    setShowLoginModal(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const openLoginModal = () => {
    setShowLoginModal(true)
  }

  const closeLoginModal = () => {
    setShowLoginModal(false)
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
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
                  <SignUp toggleForm={toggleForm} />
                ) : (
                  <SignIn toggleForm={toggleForm} onLogin={handleLogin} />
                )}
              </Modal>
              <main>
                <RouterComponent isSignUp={isSignUp} toggleForm={toggleForm} onLogin={handleLogin} />
              </main>
              <PostModal />
            </div>
        </PostProvider>
        <PostModal />
      </BrowserRouter>
    </Provider>
  )
}

export default App


