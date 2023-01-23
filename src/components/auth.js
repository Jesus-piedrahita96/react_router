import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = React.createContext()
const adminList = ['jesus', 'mauricio']

function AuthProvaider(props) {
  const navigate = useNavigate()
  const [ user, setUser ] = React.useState(null)

  const authLogin = (user) => {
    const isAdmin = adminList.find(admin => admin === user)
    setUser({user, isAdmin})
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