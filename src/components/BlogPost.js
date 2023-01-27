import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useCrud, useDataJson } from "./auth";

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
      <h2>{datos.title}</h2>
      <p>{datos.content}</p>
      <p><strong>Autor</strong>: {datos.auth}</p>
      <button onClick={back}>Volver</button>
      {canDeletEdit && (
        <button onClick={deletePost}>Eliminar blogpost</button>
      )}
      {canDeletEdit && (
        <button onClick={editPost}>Editar</button>
      )}
    </>
  )
}

export { BlogPost }