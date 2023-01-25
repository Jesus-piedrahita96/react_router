//importaciones
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

//declaracion de variables
const AuthContext = React.createContext()
const adminList = [ 'jesus', 'mauricio' ]

//funcion principal
function AuthProvaider(props) {
  const {
    statu,
    // saveData
  } = useLocalStorage('DATA_V1', [])

  const navigate = useNavigate()
  const [ user, setUser ] = React.useState(null)

  const authLogin = (user) => {
    const isAdmin = adminList.find(admin => admin === user)
    setUser({ user, isAdmin })
    navigate('/profile')
  }

  const authLogout = () => {
    setUser(null)
    navigate('/')
  }

  const auth = { user, authLogin, authLogout }

  return (
    <AuthContext.Provider
      value={{
        auth,
        statu
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const auth = React.useContext(AuthContext)
  return auth.auth
}

function useDataJson() {
  const dataj = React.useContext(AuthContext)
  return dataj.statu
}

function AuthRouter(props) {
  const auth = useAuth()
  if (!auth.user) {
    return <Navigate to={'/login'} />
  }

  return props.children
}

export {
  AuthProvaider,
  AuthRouter,
  useAuth,
  useDataJson,
}