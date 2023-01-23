import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "./Data";
import { useAuth } from "./auth";

function BlogPost() {
  const auth = useAuth()
  const navegation = useNavigate()
  const {slug} = useParams()
  const datos = blogData.find(data => data.slug === slug)
  const canDelet = auth.user.isAdmin || datos.auth === auth.user.user

  function back() {
    navegation('/blog')
  }

  return(
    <>
      <h2>{datos.title}</h2>
      <p>{datos.content}</p>
      <p><strong>Autor</strong>: {datos.auth}</p>
      <button onClick={back}>Volver</button>
      {canDelet && (
        <button>Eliminar blogpost</button>
      )}
    </>
  )
}

export {BlogPost}