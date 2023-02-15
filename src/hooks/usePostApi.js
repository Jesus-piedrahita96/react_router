import axios from 'axios'

function usePostApi(api) {
  const postPost = (object) => {
    setTimeout(() => {
      axios.post(api, {
        auth: object.auth,
        content: object.content,
        slug: object.slug,
        title: object.title
      }).catch(error => console.log(error))
        .finally(() => console.log('post-finalizado'))

    }, 2000);
  }
  const crud = { postPost }
  return crud
}

export { usePostApi }