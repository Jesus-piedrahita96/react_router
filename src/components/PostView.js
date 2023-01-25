import React from "react";
import { useAuth, useCrud } from "./auth";

function PostView() {
  const auth = useAuth()
  const crud = useCrud()
  const [ datos, setDatos ] = React.useState({
    title: "",
    slug: "",
    content: "",
    auth: auth.user.user
  })

  const onAdd = (event) => {
    event.preventDefault()
    crud.creatNewData(datos)
    setDatos({
      title: "",
      slug: "",
      content: "",
      auth: ""
    })
  }

  return (
    <>
      <h2>Crear un nuevo blog page</h2>
      <form onSubmit={onAdd}>
        <input
          value={datos.title}
          onChange={(event) => {
            setDatos({
              ...datos,
              title: event.target.value
            })
          }}
          placeholder="Titulo" />
        <input
          value={datos.content}
          onChange={(event) => {
            setDatos({
              ...datos,
              content: event.target.value
            })
          }}
          placeholder="Description" />
        <input
          value={datos.slug}
          onChange={(event) => {
            setDatos({
              ...datos,
              slug: event.target.value
            })
          }}
          placeholder="Direccion del page" />
        <br />
        <button type="submit">Crear</button>
      </form>
    </>
  )
}

export { PostView }