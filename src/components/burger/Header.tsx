import React from 'react';
import BurgerMenu from '../burger/Burger';
import '../../styles/Header.scss';
import { useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../data/hooks';
import { logout } from '../../redux/authReducer';

interface HeaderProps {
  isMenuOpen: boolean
  toggleMenu: () => void
  toggleForm: () => void
  isLoggedIn: boolean
  handleLogout: () => void 
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu, toggleForm, isLoggedIn, handleLogout }) => {
  // const dispatch = useDispatch()
  const dispatch = useAppDispatch()
  const profile = useAppSelector((state) => state.auth.profile)

  const handleLogoutClick = () => {
    dispatch(logout())
    handleLogout()
  }
  return (
    <header className="App-header">
      <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isLoggedIn ? (
        <button className="profile-button" onClick={handleLogoutClick}>Log Out</button>
      ) : (
        <button className="login-button" onClick={toggleForm}>Login</button>
      )}
    </header>
  )
}

export default Header