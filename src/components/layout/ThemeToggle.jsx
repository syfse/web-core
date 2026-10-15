import { useTheme } from '../../app/providers/useTheme'

function ThemeToggle() {
  const { currentTheme, setCurrentTheme } = useTheme()
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

export { ThemeToggle }
