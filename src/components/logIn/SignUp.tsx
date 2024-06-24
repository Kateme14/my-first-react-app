import React, { useState } from 'react'
import '../../styles/SignIn.scss'

interface SignUpProps {
  toggleForm: () => void
}

const SignUp: React.FC<SignUpProps> = ({ toggleForm }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Confirm Password:', confirmPassword)
    console.log('Username:', username)
  }

  return (
    <div className="sign-in-page">
      <a href="#" className="sign-in-page__header-link">Back to Home Page</a>
      <h1 className="sign-in-page__header">Sign Up</h1>
      <div className="sign-in">
        <div className="sign-in__container">
          <form onSubmit={handleSubmit}>
            <div className="sign-in__form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="sign-in__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sign-in__form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sign-in__form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="sign-in__button">Sign Up</button>
          </form>
          <div className="sign-up__link-group">
            <span className="sign-up__text">Already have an account? </span><a className="sign-up__link" href="#" onClick={toggleForm}>Sign in</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
