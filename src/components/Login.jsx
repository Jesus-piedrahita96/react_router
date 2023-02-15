import React from "react";
import { useAuth } from "./auth";
import '../css/global.css'

import swal from "sweetalert";

function Login() {
  //consumiendo variable global
  const auth = useAuth()

  //estado simple
  const [ state, setState ] = React.useState('')

  // acciones
  const cambiar = (event) => {
    setState(event.target.value)
  }

  const enviar = (event) => {
    swal({
      text: 'bienvenido',
      buttons: false,
      icon: 'success',
      timer: 2000
    })
    event.preventDefault()
    auth.authLogin(state)
  }

  return (
    <>
      <div className="contain-login">
        <div className="contain-login__image"></div>
        <form
          className="contain-login__form"
          onSubmit={enviar}>
          <h1>Login</h1>
          <label htmlFor="pass">Password</label>
          <div className="contain-login__form-sub">
            <input
              id="pass"
              className="effect"
              value={state}
              onChange={cambiar}
              placeholder="dijite el avatar"
            />
            <button className="effect primary" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export { Login }