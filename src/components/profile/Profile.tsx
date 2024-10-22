import React from 'react'
import { useAppDispatch, useAppSelector } from '../../data/hooks'
import { RootState } from '../../redux/store'
import { logout } from '../../redux/authReducer'
import { useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
  const username = useAppSelector((state: RootState) => state.auth.username)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/signin')
  }

  if (!username) {
    return <p>No user data available</p>
  }

  return (
    <div className="profile-page">
      <h1>Welcome, {username}!</h1>
      <p>This is your profile page.</p>
    </div>
  )
}

export default Profile
