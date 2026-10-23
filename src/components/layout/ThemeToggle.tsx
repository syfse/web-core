import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../providers/theme/useTheme'
import { SecondaryButton } from '../ui/button/Button'

function ThemeToggle() {
  const { currentTheme, setCurrentTheme } = useTheme()
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

  return (
    <SecondaryButton
      className="theme-toggle"
      onClick={() => setCurrentTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={currentTheme === 'dark'}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {currentTheme === 'light' ? <Sun /> : <Moon />}
      </span>
    </SecondaryButton>
  )
}

export { ThemeToggle }