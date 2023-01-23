import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext()

function AuthProvaider(props) {
  const navigate = useNavigate()
  const [ user, setUser ] = React.useState(null)

  const authLogin = (estado) => {
    setUser(estado)
    navigate('/profile')
  }

  const authLogout = () => {
    setUser(null)
    navigate('/')
  }

  const auth = { user, authLogin, authLogout }

  return (
    <AuthContext.Provider
      value={auth}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const auth = React.useContext(AuthContext)
  return auth
}

function AuthRouter(props) {
  const auth = useAuth()
  if(!auth.user) {
    return <Navigate to={'/login'} />
  }

  return props.children
}

export {
  AuthProvaider,
  AuthRouter,
  useAuth
}