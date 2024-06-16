import React from 'react'
import BurgerMenu from '../burger/Burger'
import '../../styles/Header.scss'

interface HeaderProps {
  isMenuOpen: boolean
  toggleMenu: () => void
  toggleForm: () => void
  isLoggedIn: boolean
  handleLogout: () => void
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu, toggleForm, isLoggedIn, handleLogout }) => {
  return (
    <header className="App-header">
      <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isLoggedIn ? (
        <button className="profile-button" onClick={handleLogout}>Profile</button>
      ) : (
        <button className="login-button" onClick={toggleForm}>Login</button>
      )}
    </header>
  )
}

export default Header