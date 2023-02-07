import React from 'react'
import { useAuth } from './auth'
import { NavLink } from 'react-router-dom'

import '../css/menu-mobil.css'


function MenuMobile() {
  const auth = useAuth()

  return (
    <>
      <nav className="container-mobil">
        <ul className="container-mobil__list">
          {routes.map(route => {
            if (!route.private && !auth.user) {
              return (
                <li
                  className='container-mobil__list-item'
                  key={routes.indexOf(route)}
                >
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? 'blue' : 'black'
                    })}
                    to={route.to}
                  >
                    {route.text}
                  </NavLink>
                </li>
              )
            } else if (route.private && auth.user) {
              return (
                <li key={routes.indexOf(route)}>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? 'blue' : 'black'
                    })}
                    to={route.to}
                  >
                    {route.text}
                  </NavLink>
                </li>
              )
            }
          })}
        </ul>
      </nav>
    </>
  )
}

const routes = [
  { to: '/', text: 'Home', private: false },
  { to: '/blog', text: 'Page', private: true },
  { to: '/login', text: 'Login', private: false },
  { to: '/logout', text: 'Logout', private: true },
  { to: '/profile', text: 'Profile', private: true },
  { to: '/post', text: 'Post', private: true }
]

export { MenuMobile }