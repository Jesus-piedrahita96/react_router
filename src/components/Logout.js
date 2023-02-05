import React from "react";
import { useAuth } from "./auth";
import '../css/logout.css'

function Logout() {
  const auth = useAuth()

  const back = () => {
    auth.authLogout()
  }
  return (
    <>
      <div className="container-logout">
        <div className="container-logout__image"></div>
        <div className="container-logout__header">
          <h1>Logout</h1>
          <p>Seguro que desea salir</p>
          <button onClick={back}>Salir</button>
        </div>
      </div>
    </>
  )
}

export { Logout }