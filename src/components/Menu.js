import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

import '../css/menu.css'

function Menu() {
  const auth = useAuth()

  return (
    <nav className="container">
      <span className="container-icon"></span>
      <ul className="container-list">
        {routes.map(route => {
          if(!route.private && !auth.user){
            return(
              <li
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
          }else if(route.private && auth.user) {
            return(
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

export { Menu }