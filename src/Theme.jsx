import { useContext, useEffect, useState } from 'react'
import ThemeContext from './theme-context'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function Theme({ children }) {
  const [currentTheme, setCurrentTheme] = useState(getSystemTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeToggle() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('ThemeToggle must be used within a Theme provider')
  }

  const { currentTheme, setCurrentTheme } = context
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setCurrentTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={currentTheme === 'dark'}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {currentTheme === 'light' ? '☾' : '☼'}
      </span>
    </button>
  )
}

export { Theme, ThemeToggle }
