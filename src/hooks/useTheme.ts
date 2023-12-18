import { useCallback } from 'react'

import useLocalStorage from '@/hooks/useLocalStorage'

export type Theme = 'light' | 'dark'

export function useTheme(defaultTheme: Theme = 'light'): [Theme, React.Dispatch<React.SetStateAction<Theme>>] {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', defaultTheme)
  return [
    theme,
    useCallback(
      (newTheme) => {
        setTheme(newTheme)
        const isDark = newTheme === 'dark'
        document.documentElement.classList.toggle('dark', isDark)
      },
      [setTheme]
    )
  ]
}
