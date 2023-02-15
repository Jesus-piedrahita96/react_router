import axios from "axios";
import React from 'react'

function useGetApi(api) {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get(api)
      .then(response => {
        setData(response.data)
      }).catch(error => console.log(error))
        .finally(() => console.log('Get-menu-finaliza'))

  }, [ api ])

  return data
}

export { useGetApi }