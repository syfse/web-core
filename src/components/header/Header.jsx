import { ThemeToggle } from '../../Theme'

function Header() {
    return (
        <header className="topbar">
            <a className="brand" href="/" aria-label="Syfse home">
                <span className="brand-mark" aria-hidden="true">S</span>
                <span>Syfse</span>
            </a>
            <ThemeToggle />
        </header>
    );
}

export default Header;