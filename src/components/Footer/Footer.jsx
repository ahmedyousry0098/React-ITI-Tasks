import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="footer-component text-center text-lg-start fixed-bottom shadow-lg">
        <div className="text-center p-3">
            <span className='text-white'>© 2023 Copyright:</span>
            <a className="text-white" href="https://iti.gov.eg/iti/home">iti</a>
        </div>
    </footer>
  )
}

export default Footer