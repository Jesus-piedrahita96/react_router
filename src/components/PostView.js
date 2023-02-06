import React from "react";
import { useAuth, useCrud } from "./auth";
import '../css/post.css'

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
      <div className="contain">
        <div className="contain-post">
          <h1>Crear un nuevo blog page</h1>
          <form className="contain-post__form" onSubmit={onAdd}>
            <input
              className="contain-post__form-effect"
              value={datos.title}
              onChange={(event) => {
                setDatos({
                  ...datos,
                  title: event.target.value
                })
              }}
              placeholder="Titulo" />
            <input
              className="contain-post__form-effect"
              value={datos.content}
              onChange={(event) => {
                setDatos({
                  ...datos,
                  content: event.target.value
                })
              }}
              placeholder="Description" />
            <input
              className="contain-post__form-effect"
              value={datos.slug}
              onChange={(event) => {
                setDatos({
                  ...datos,
                  slug: event.target.value
                })
              }}
              placeholder="Direccion del page" />
            <br />
            <button
              className="contain-post__form-buttom"
              type="submit">Crear</button
            >
          </form>
        </div>
      </div>
    </>
  )
}

export { PostView }