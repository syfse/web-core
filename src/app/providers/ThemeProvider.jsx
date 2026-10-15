import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const THEME_COLORS = {
  light: '#f6f4ef',
  dark: '#202522',
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(getSystemTheme)
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
