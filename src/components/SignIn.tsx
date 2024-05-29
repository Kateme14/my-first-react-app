import '../SignIn.scss'

const SignIn = () => {
  return (
    <div className="sign-in-page">
        <a href="#" className="sign-in-page__header-link">Back to Home Page</a>
        <h1 className="sign-in-page__header">Sign In</h1>
        <div className="sign-in">
            <div className="sign-in__container">
                <form>
                <div className="sign-in__form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" />
                </div>
                <div className="sign-in__form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Your password" />
                </div>
                <div className="sign-in__form-group">
                    <a href="#" className="sign-in__forgot-password">Forgot password?</a>
                </div>
                <button type="submit" className="sign-in__button">Sign In</button>
                </form>
                <div className="sign-up__link-group">
                <span className="sign-up__text">Don't have an account? </span><a className="sign-up__link" href="#">Sign up</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn
