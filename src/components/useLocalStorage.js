import React from 'react'
import {useGetApi} from '../hooks/useGetApi'

function useLocalStorage(nameData, initialValue) {
  const API = 'http://localhost:8000/api/post/'
  const dataGet = useGetApi(API)


  //estado compuesto
  const [ statu, setStatu ] = React.useState({
    loading: true,
    error: false,
    data: initialValue
  })

  React.useEffect(() => {
    saveData(dataGet)
  }, [dataGet])

  //guardar datos en el localStorage y actualizar la info de los estados
  const saveData = (newData) => {
    try {
      const jsonData = JSON.stringify(newData)
      localStorage.setItem(nameData, jsonData)
      setStatu({
        ...statu,
        data: newData
      })
    } catch (error) {
      setStatu({
        ...statu,
        error: error,
        loading: false
      })
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let localData
        const localStorageData = localStorage.getItem(nameData, initialValue)
        if (!localStorageData) {
          localStorage.setItem(nameData, JSON.stringify(initialValue))
          localData = []
        } else {
          localData = JSON.parse(localStorageData)
        }

        setStatu({
          ...statu,
          loading: false,
          data: localData
        })
      } catch (error) {
        setStatu({
          ...statu,
          error: error,
          loading: false
        })
      }
    }, 3000);
  }, [statu.loading])

  return {
    statu,
    saveData,
    setStatu
  }
}

export { useLocalStorage }