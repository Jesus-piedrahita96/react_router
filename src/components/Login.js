import React from "react";
import { useAuth } from "./auth";

function Login() {
  //consumiendo variable global
  const auth = useAuth()

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
      <form onSubmit={enviar}>
        <h2>Login</h2>
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          value={state}
          onChange={cambiar}
          placeholder="dijite el password"
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  )
}

export { Login }