import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue'
              })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const routes = [
  { to: '/', text: 'Home' },
  { to: '/page', text: 'Page' },
  { to: '/profile', text: 'Profile' }
]

export { Menu }