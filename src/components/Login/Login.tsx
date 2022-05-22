// import React, { FC } from 'react'
import '../Login/Login.scss'

const Login: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="form-container sign-in-container">
          <div className="signup-blurb">
            <p>Don&apos;t have an account?</p>
            <a className="padding-y-sm" href="#S">
              SIGN UP
            </a>
          </div>
          <form action="#">
            <div>
              <h3 className="form-heading">Sign in to Eventio.</h3>
              <p className="muted">Enter your details below.</p>
            </div>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {/* <a className="padding-x-sm" href="#s">
              Forgot your password?
            </a> */}
            <button className="margin-x-xl">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="header-logo"></div>
            <div className="overlay-panel">
              <div className="overlay-panel-text">
                <h1>
                  &quot;Great, kid. Don&apos;t <br />
                  get cocky.&quot;
                </h1>
                <span></span>
                <p>Han Solo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
