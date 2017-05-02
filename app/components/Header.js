import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <div className='navbar-brand'>
            <NavLink to='/'>
              Home
            </NavLink>
          </div>
        </div>
        <ul className='nav navbar-nav navbar-right'>
          <li>
            <NavLink to='/feature'>
              Feature
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup'>
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink to='/signin'>
              Signin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
