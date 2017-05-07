import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({isAuth}) => {
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
          {isAuth &&
            <li>
              <NavLink to='/feature'>
                Feature
              </NavLink>
            </li>
          }
          {!isAuth &&
            <li>
              <NavLink to='/signup'>
                Signup
              </NavLink>
            </li>
          }
          {!isAuth &&
            <li>
              <NavLink to='/signin'>
                Signin
              </NavLink>
            </li>
          }
          {isAuth &&
            <li>
              <NavLink to='/signout'>
                Signout
              </NavLink>
            </li>
          }
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({isAuth: state.auth.authenticated})

export default connect(mapStateToProps)(Header)
