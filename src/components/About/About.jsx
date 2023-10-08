import React from 'react'

function About() {
  return (
    <div className="about-container container mx-auto row justify-content-end align-items-center align-align-items-center text-white custom-font min-vh-100" style={{height: "75vh"}}>
        <div className="col-md-7 ml-md-auto text-center about-party ">
            <h1 className="font-alt heading font-yellow">About The Party</h1>
            <div className="about-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="btn-bar text-center">
                    <a className="font-yellow" href="#">Know More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About