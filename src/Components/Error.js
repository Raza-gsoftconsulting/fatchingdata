import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div>
    <h2 className='h2-tag'>404 Page Not Found</h2>
    <Link to='/' className= 'btn'>Home</Link>
    </div>
  )
}

export default Error;
