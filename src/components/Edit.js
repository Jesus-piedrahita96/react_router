import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCrud, useDataJson } from "./auth";

import '../css/edit.css'

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
      <div className="container-edit">
        <h1 className="container-edit__title">Editar datos</h1>
        <form
          className="container-edit__form"
          onSubmit={editarDatos}
        >
          <input
            className="effect"
            id="title"
            value={data.title}
            onChange={(event) => setData({ ...data, title: event.target.value })}
          />
          <textarea
            className="effect"
            id="content"
            rows={10}
            value={data.content}
            onChange={(event) => setData({ ...data, content: event.target.value })}
          />
          <button
            className="effect primary"
            type="submit"
          >Editar</button>
          <button
            className="effect second"
            onClick={() => navigate('/blog')}
          >Volver</button>
        </form>
      </div>
    </>
  )
}

export { Edit }