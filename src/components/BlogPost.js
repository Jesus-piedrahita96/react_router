import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "./Data";

function BlogPost() {
  const navegation = useNavigate()
  const {slug} = useParams()
  const datos = blogData.find(data => data.slug === slug)

  function back() {
    navegation('/blog')
  }

  return(
    <>
      <h2>{datos.title}</h2>
      <p>{datos.content}</p>
      <p><strong>Autor</strong>: {datos.auth}</p>
      <button onClick={back}>Volver</button>
    </>
  )
}

export {BlogPost}