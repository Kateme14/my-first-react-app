import React, { useState } from 'react'
import '../../styles/SignIn.scss'
import { useAppDispatch, useAppSelector } from '../../data/hooks'
import { login, loginSuccess } from '../../redux/authReducer'
import { RootState } from '../../redux/store'
import { useNavigate } from 'react-router-dom'


interface SignInProps {
  toggleForm: () => void
  onLogin: () => void
}

const SignIn: React.FC<SignInProps> = ({ toggleForm, onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(login({ email, password }))
  .unwrap()
  .then((response) => {
    const token = response.token
    localStorage.setItem('token', token)
    const username = response.username || email
    localStorage.setItem('username', username)

    dispatch(loginSuccess({ token, username }))
    onLogin()
    navigate('/profile')
  })
  .catch((err) => {
    console.error('Login failed:', err)
  })
  }

  return (
    <div className="sign-in-page">
      <h1 className="sign-in-page__header">Sign In</h1>
      <div className="sign-in">
        <div className="sign-in__container">
          <form onSubmit={handleSubmit}>
            <div className="sign-in__form-group">
              <label htmlFor="signin-email">Email</label>
              <input 
                type="email" 
                id="signin-email" 
                name="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sign-in__form-group">
              <label htmlFor="signin-password">Password</label>
              <input 
                type="password" 
                id="signin-password" 
                name="password" 
                placeholder="Your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sign-in__form-group">
              <a href="#" className="sign-in__forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="sign-in__button" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
            {error && <p className="sign-in__error">{error}</p>}
          </form>
          <div className="sign-up__link-group">
            <span className="sign-up__text">Don't have an account? </span>
            <button className="sign-up__link" onClick={toggleForm}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn