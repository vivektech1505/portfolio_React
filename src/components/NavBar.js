import React from 'react'
import '../App.css'

const NavBar = () => {
  return (
    <div className='main'>
        <div className='logo'>
            <h2>PortFolio</h2>
        </div>
            <ul className='menu'>
            <li>Home</li>
            <li>Project</li>
            <li>Contact</li>
            </ul>
    </div>
  )
}

export default NavBar