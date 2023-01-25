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
    saveData
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

  const creatNewData = (data) => {
    const aux = [...statu.data]
    aux.push({
      title: data.title,
      slug: data.slug,
      content: data.content,
      auth: data.auth
    })
    saveData(aux)
  }

  const auth = { user, authLogin, authLogout }
  const crud = {creatNewData}

  return (
    <AuthContext.Provider
      value={{
        auth,
        statu,
        crud
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

function useCrud() {
  const crud = React.useContext(AuthContext)
  return crud.crud
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
  useCrud,
}