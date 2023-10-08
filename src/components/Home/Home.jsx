import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='container home-container d-flex align-items-center justify-content-end'>
      <div className="home-text-center d-flex flex-column w-50 align-items-center">
          <p className='custom-font text-white h3 mb-2'>31th octobar 2018</p>
          <h1 className="font-alt ban-txt font-yellow custom-font mb-2">Halloween Party</h1>
          <p className="text-center text-white mb-2 fs-5">Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</p>
      </div>
    </div>
  )
}

export default Home