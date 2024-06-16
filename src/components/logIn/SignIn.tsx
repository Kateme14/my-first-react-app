import React from 'react'
import '../../styles/SignIn.scss'
import { useState } from 'react'

interface SignInProps {
    toggleForm: () => void
    onLogin: () => void
  }

// const SignIn: React.FC<SignInProps> = ({ toggleForm }) => {
    const SignIn: React.FC<SignInProps> = ({ toggleForm, onLogin }: SignInProps) => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
      
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault()
          // Здесь должна быть логика для проверки имени пользователя и пароля
          // Если вход успешен:
          onLogin()
        }
//   return (
//     <div className="sign-in-page">
//         <a href="#" className="sign-in-page__header-link">Back to Home Page</a>
//         <h1 className="sign-in-page__header">Sign In</h1>
//         <div className="sign-in">
//             <div className="sign-in__container">
//                 <form>
//                 <div className="sign-in__form-group">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" id="email" name="email" placeholder="Your email" />
//                 </div>
//                 <div className="sign-in__form-group">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" name="password" placeholder="Your password" />
//                 </div>
//                 <div className="sign-in__form-group">
//                     <a href="#" className="sign-in__forgot-password">Forgot password?</a>
//                 </div>
//                 <button type="submit" className="sign-in__button">Sign In</button>
//                 </form>
//                 <div className="sign-up__link-group">
//                 <span className="sign-up__text">Don't have an account? </span><a className="sign-up__link" href="#" onClick={toggleForm}>Sign up</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
return (
    <div className="sign-in-page">
      <h1 className="sign-in-page__header">Sign In</h1>
      <div className="sign-in">
        <div className="sign-in__container">
          <form onSubmit={handleSubmit}>
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
              <a href="#" className="sign-in__forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="sign-in__button">Sign In</button>
          </form>
          <div className="sign-up__link-group">
            <span className="sign-up__text">Don't have an account? </span>
            <a className="sign-up__link" href="#" onClick={toggleForm}>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
