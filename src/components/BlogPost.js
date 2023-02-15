import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useCrud, useDataJson } from "./auth";
import '../css/page.css';
import swal from "sweetalert";

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
    swal({
      title: 'Delete',
      text: 'Seguro quiere eliminar el post',
      icon: 'warning',
      dangerMode: true,
      buttons: {
        cancel: {
          text: 'cancelar',
          value: false,
          visible: true,
          className: 'effect second'
        },
        confirm: {
          text: 'aceptar',
          value: true,
          visible: true,
          className: 'effect primary'
        }
      }
    }).then(response => {
      if (response) {
        crud.deleteData(datos.id)
        swal({
          text: 'eliminado con exito',
          icon: 'success',
          timer: 2000,
          className: 'success-rgb',
          buttons: false
        })
        back()
      }
    })
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
            className="effect second"
            onClick={back}
          >Volver</button>
          {canDeletEdit && (
            <button
              className="effect danger"
              onClick={deletePost}
            >Eliminar blogpost</button>
          )}
          {canDeletEdit && (
            <button
              className="effect primary"
              onClick={editPost}
            >Editar</button>
          )}
        </div>
      </div>
    </>
  )
}

export { BlogPost }