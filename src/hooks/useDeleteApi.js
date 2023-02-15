import axios from "axios";

function useDeleteApi(api) {

  const deletePost = (id) => {
    axios.delete(`${api}${id}/`)
      .then(response => console.log(response))
      .catch(error => console.log(error))
      .finally(() => console.log('delete-post-finalizado'))
  }

  const crud = { deletePost }
  return crud
}

export {useDeleteApi};