import { createContext, type Dispatch, type SetStateAction } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  currentTheme: Theme
  setCurrentTheme: Dispatch<SetStateAction<Theme>>
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export { ThemeContext }
export type { Theme, ThemeContextValue }