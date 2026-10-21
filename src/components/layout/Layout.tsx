import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import './Layout.scss'

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  )
}

export { Layout }