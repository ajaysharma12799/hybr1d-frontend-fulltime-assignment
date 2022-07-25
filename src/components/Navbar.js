import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-[#3944f7] p-5 mb-5'>
        <Link to="/">
            <h1 className="text-center text-xl text-[#ffffff]">Hybr1d</h1>
        </Link>
    </nav>
  )
}

export default Navbar