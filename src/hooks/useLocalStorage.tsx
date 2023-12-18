import { useState, useEffect, useMemo } from 'react'

function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const initial = useMemo<T>(() => {
    const storedValue = localStorage.getItem(key)
    let tmp = initialValue
    try {
      tmp = storedValue ? JSON.parse(storedValue) : initialValue
    } catch (e) {
      console.warn(e)
    }
    return tmp
  }, [key, initialValue])

  const [value, setValue] = useState<T>(initial)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
