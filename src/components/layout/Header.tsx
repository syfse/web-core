import { ThemeToggle } from './ThemeToggle'

function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="/" aria-label="Syfse home">
        <span className="site-header__mark" aria-hidden="true">S</span>
        <span>Syfse</span>
      </a>
      <ThemeToggle />
    </header>
  )
}

export { Header }