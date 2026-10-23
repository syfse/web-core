import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './ThemeContext'

const THEME_COLORS: Record<Theme, string> = {
  light: '#f6f4ef',
  dark: '#202522',
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

type ThemeProviderProps = {
  children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getSystemTheme)
  const themeValue = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme],
  )

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[currentTheme])
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }