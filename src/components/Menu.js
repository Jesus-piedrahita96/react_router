import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth, useCrud } from "./auth";
import ModalMenuMobile from './ModalMenuMobile';
import { MenuMobile } from './MenuMobile';

import '../css/menu.css';
import { useGetApi } from "../hooks/useGetApi";

function Menu() {
  const APIMENU = 'http://localhost:8000/api/menu/'
  const auth = useAuth()
  const crud = useCrud()
  const menu = useGetApi(APIMENU)
  //* console.log(menu)

  const onMenuMobile = () => {
    crud.setModal(!crud.modal)
  }

  return (
    <>
      <nav className="container">
        <span onClick={onMenuMobile} className="container-icon"></span>
        <ul className="container-list">
          {menu.map(route => {
            if (!route.private && !auth.user) {
              return (
                <li
                  key={route.id}
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
                <li key={route.id}>
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
      {crud.modal && (
        <ModalMenuMobile>
          <MenuMobile />
        </ModalMenuMobile>
      )}
    </>
  )
}

// const routes = [
//   { to: '/', text: 'Home', private: false },
//   { to: '/blog', text: 'Page', private: true },
//   { to: '/login', text: 'Login', private: false },
//   { to: '/logout', text: 'Logout', private: true },
//   { to: '/profile', text: 'Profile', private: true },
//   { to: '/post', text: 'Post', private: true }
// ]

export { Menu }