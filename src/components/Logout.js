import React from "react";
import { useAuth } from "./auth";

function Logout() {
  const auth = useAuth()

  const back = () => {
    auth.authLogout()
  }
  return (
    <>
      <h2>Logout</h2>
      <p>Seguro que desea salir</p>
      <button onClick={back}>Salir</button>
    </>
  )
}

export { Logout }