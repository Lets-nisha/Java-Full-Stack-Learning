import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <span className='navLeft'>React</span>
            <nav className='navRight'>
                <Link className='link' to="/">Home </Link>
                <Link className='link' to="/about">About </Link>
                <Link className='link' to="/skills">Skills </Link>
                <Link className='link' to="/project">Project </Link>
                <Link className='link' to="/user/:id">User </Link>
                <Link className='link' to="/form">Form </Link>
            </nav>
        </header>


    )
}

export default Header