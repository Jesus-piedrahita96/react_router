import React from "react";
import { useAuth, useDataJson } from "./auth";
import '../css/global.css'

function Login() {
  //consumiendo variable global
  const auth = useAuth()
  const localStorageData = useDataJson()

  //estado simple
  const [ state, setState ] = React.useState('')

  // acciones
  const cambiar = (event) => {
    setState(event.target.value)
    // console.log(event.target.value)
  }

  const enviar = (event) => {
    event.preventDefault()
    // console.log(`formulario: ${state}`)
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
              placeholder="dijite el password"
            />
            <button className="effect primary" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export { Login }