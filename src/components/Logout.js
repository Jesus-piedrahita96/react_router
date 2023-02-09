import React from "react";
import { useAuth } from "./auth";
import '../css/logout.css'

import swal from "sweetalert";

function Logout() {
  const auth = useAuth()

  const back = () => {
    swal({
      text: 'Vuelva pronto',
      buttons: false,
      icon: 'success',
      timer: 2000
    })
    auth.authLogout()
  }
  return (
    <>
      <div className="container-logout">
        <div className="container-logout__image"></div>
        <div className="container-logout__header">
          <h1>Logout</h1>
          <p>Seguro que desea salir</p>
          <button className="effect primary" onClick={back}>Salir</button>
        </div>
      </div>
    </>
  )
}

export { Logout }