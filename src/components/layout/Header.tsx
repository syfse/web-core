import LogoText from '../logo/Logo'
import { SecondaryButton } from '../ui/button/Button'
import { ThemeToggle } from './ThemeToggle'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <Link to="/" aria-label="Syfse home">
        <LogoText />
      </Link>
      <div className="site-header__actions">
        <SecondaryButton>
          <Link to="/about" className="site-header__actions__link">
            About Us
          </Link>
        </SecondaryButton>
        <ThemeToggle />
      </div>
    </header>
  )
}

export { Header }