import React, { useEffect } from 'react'

function useLocalStorage(nameData, initialValue) {
  //estado compuesto
  const [ statu, setStatu ] = React.useState({
    loading: true,
    error: false,
    data: initialValue
  })

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
          localData = initialValue
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