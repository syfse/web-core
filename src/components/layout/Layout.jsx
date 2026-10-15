import { Footer } from './Footer'
import { Header } from './Header'
import './Layout.scss'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export { Layout }
