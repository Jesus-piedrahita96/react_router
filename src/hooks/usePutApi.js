import axios from "axios";

function usePutApi(api) {

  const putPost = (object, id) => {
    axios.put(`${api}${id}/`, {
      auth: object.auth,
      content: object.content,
      slug: object.slug,
      title: object.title,
    }).then(response => console.log(response))
      .catch(error => console.log(error))
      .finally(() => console.log('put-post-finalizo'))
  }

  const crud = { putPost }
  return crud
}

export { usePutApi };