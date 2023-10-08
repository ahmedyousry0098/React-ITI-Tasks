import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='vh-100 d-flex flex-column align-items-center justify-content-center'>
      <h1 className='w-100 text-center h1 text-white'>Invalid Route..</h1>
      <Link className='btn btn-warning fs-3' to="">Back to home</Link>
    </div>
  )
}

export default NotFound