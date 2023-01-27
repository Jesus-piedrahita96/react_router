import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCrud, useDataJson } from "./auth";

function Edit() {
  const { dataRuta } = useParams()
  const localDataStorage = useDataJson()
  const navigate = useNavigate()
  const crud = useCrud()
  const equalData = localDataStorage.data.find(datos => datos.slug === dataRuta)
  const [ data, setData ] = React.useState({
    title: equalData.title,
    slug: equalData.slug,
    content: equalData.content,
    auth: equalData.auth
  })

  const editarDatos = (event) => {
    event.preventDefault()
    crud.editData(data)
    navigate('/blog')
  }

  return (
    <>
      <h1>Editar datos</h1>
      <form onSubmit={editarDatos}>
        <label htmlFor="title">title</label>
        <input
          id="title"
          value={data.title}
          onChange={(event) => setData({ ...data, title: event.target.value })}
        />
        <br />
        <label htmlFor="content">description</label>
        <input
          id="content"
          value={data.content}
          onChange={(event) => setData({ ...data, content: event.target.value })}
        />
        <br />
        <button type="submit">Editar</button>
      </form>
    </>
  )
}

export { Edit }