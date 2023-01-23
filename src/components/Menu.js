import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu() {
  const auth = useAuth()

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if(!route.private && !auth.user){
            return(
              <li key={routes.indexOf(route)}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue'
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
                  color: isActive ? 'red' : 'blue'
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
  { to: '/login', text: 'login', private: false },
  { to: '/logout', text: 'logout', private: true },
  { to: '/profile', text: 'Profile', private: true }
]

export { Menu }