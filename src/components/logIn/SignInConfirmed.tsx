import '../../styles/SignIn.scss'

const SignInConfirmed = () => {
  return (
    <div className="sign-in-page">
        <a href="#" className="sign-in-page__header-link">Back to Home Page</a>
        <h1 className="sign-in-page__header">Success</h1>
        <div className="sign-in">
            <div className="sign-in__container">
                <p className="sign-in__confirmed">You have signed in</p>
                <button type="submit" className="sign-in__button">Go to home</button>
                <div className="sign-up__link-group">
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignInConfirmed