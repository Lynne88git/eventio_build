import React from 'react'
import '../NotFound/NotFound.scss'

export default function NotFound() {
  return (
    <>
      <div className="container">
        <div className="message-container">
          <div className="message">
            <h3 className="form-heading">404 Error - page not found</h3>
            <p className="muted">
              Seems like Darth Vader just hits our website and it drops it down.
            </p>
            <p className="muted ">
              Please press the refresh button and everything should be fine
              again.
            </p>
            <button className="margin-x-xl button-gray">Refresh</button>
          </div>
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
