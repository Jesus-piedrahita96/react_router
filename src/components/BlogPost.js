import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useCrud, useDataJson } from "./auth";
import '../css/page.css';

function BlogPost() {
  const localStorageData = useDataJson()
  const auth = useAuth()
  const crud = useCrud()
  const navegation = useNavigate()
  const { slug } = useParams()
  const datos = localStorageData.data.find(data => data.slug === slug)
  let canDeletEdit = auth.user.isAdmin || datos.auth === auth.user.user

  function back() {
    navegation('/blog')
  }

  const deletePost = () => {
    crud.deleteData(datos.slug)
  }

  const editPost = () => {
    navegation(`/blog/post/edit/${datos.slug}`)
  }

  return (
    <>
      <div className="container-blogPost">
        <div className="container-blogPost__header">
          <h2>{datos.title}</h2>
          <p>{datos.content}</p>
          <p><strong>Autor</strong>: {datos.auth}</p>
        </div>
        <div className="container-blogPost__button">
          <button
            className="container-blogPost__button-second"
            onClick={back}
          >Volver</button>
          {canDeletEdit && (
            <button
              className="container-blogPost__button-danger"
              onClick={deletePost}
            >Eliminar blogpost</button>
          )}
          {canDeletEdit && (
            <button
              className="container-blogPost__button-primary"
              onClick={editPost}
            >Editar</button>
          )}
        </div>
      </div>
    </>
  )
}

export { BlogPost }