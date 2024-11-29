import React, { useState } from 'react'
import '../../styles/SignIn.scss'
import { useAppDispatch, useAppSelector } from '../../data/hooks'
import { registerUser } from '../../redux/authReducer'
import { RootState } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import '../../styles/SignIn.scss'

interface SignUpProps {
  toggleForm: () => void
  onLogin: () => void
}

const SignUp: React.FC<SignUpProps> = ({ toggleForm, onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')
  const [emailError, setEmailError] = useState<string | null>(null) 
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector((state: RootState) => state.auth)
  const navigate = useNavigate()


   const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setEmailError('Invalid email')
      return
    }

    if (password !== confirmPassword) {
      console.error('Passwords do not match')
      return
    }

    dispatch(registerUser({ email, password, username }))
      .unwrap()
      .then((response: { token: any }) => {
        const token = response.token 
        localStorage.setItem('token', token)
        localStorage.setItem('username', username)
        onLogin()
        navigate('/profile')
      })
      .catch((err: any) => {
        console.error('Registration failed:', err)
      })
}

  return (
    <div className="sign-in-page">
      <a href="#" className="sign-in-page__header-link">Back to Home Page</a>
      <h1 className="sign-in-page__header">Sign Up</h1>
      <div className="sign-in">
        <div className="sign-in__container">
          <form onSubmit={handleSubmit}>
            <div className="sign-in__form-group">
              <label htmlFor="signup-username">Username</label>
              <input
                type="text"
                id="signup-username"
                name="username"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="sign-in__form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError(null)
                }}
                required
              />
              {emailError && <p className="sign-in__error">{emailError}</p>} {/* Сообщение об ошибке */}
            </div>
            <div className="sign-in__form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                name="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sign-in__form-group">
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <input
                type="password"
                id="signup-confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="sign-in__button" disabled={loading}>
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
            {error && <p className="sign-in__error">{error}</p>}
          </form>
          <div className="sign-up__link-group">
            <span className="sign-up__text">Already have an account? </span><button className="sign-up__link" onClick={toggleForm}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp


