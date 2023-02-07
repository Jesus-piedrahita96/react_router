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
  const [ modal, setModal ] = React.useState(false)

  const authLogin = (user) => {
    const isAdmin = adminList.find(admin => admin === user)
    setUser({ user, isAdmin })
    navigate('/profile')
  }

  const authLogout = () => {
    setUser(null)
    navigate('/')
  }

  //Crear un nuevo post
  const creatNewData = (data) => {
    const aux = [ ...statu.data ]
    aux.push({
      title: data.title,
      slug: data.slug,
      content: data.content,
      auth: data.auth
    })
    saveData(aux)
  }

  //Eliminar un post
  const deleteData = (slug) => {
    const indice = statu.data.findIndex(dato => dato.slug === slug)
    const aux = [ ...statu.data ]
    if (aux[ indice ].auth === user.user || user.isAdmin) {
      aux.splice(indice, 1)
      saveData(aux)
      alert('Datos eliminados correctamente')
      navigate('/blog')
    } else {
      alert('Error al eliminar los datos...')
    }
  }

  //Update data
  const editData = (datosNuevos) => {
    const index = statu.data.findIndex(data => data.slug === datosNuevos.slug)
    const aux = [ ...statu.data ]
    if (aux[ index ]) {
      aux[ index ].title = datosNuevos.title
      aux[ index ].content = datosNuevos.content
      saveData(aux)
      alert('Datos midificado con exito')
    } else {
      alert('Error al intentar modificar los datos')
    }
  }

  const auth = { user, authLogin, authLogout }
  const crud = { creatNewData, deleteData, editData, modal, setModal }

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