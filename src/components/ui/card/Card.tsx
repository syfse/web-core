import type { HTMLAttributes, ReactNode } from 'react'
import './Card.scss'

type CardProps = HTMLAttributes<HTMLElement> & { children?: ReactNode }
type CardHeaderProps = HTMLAttributes<HTMLElement> & { children?: ReactNode }
type CardBodyProps = HTMLAttributes<HTMLDivElement> & { children?: ReactNode }
type CardFooterProps = HTMLAttributes<HTMLElement> & { children?: ReactNode }
type CardSubfooterProps = HTMLAttributes<HTMLDivElement> & { children?: ReactNode }

function Card({ children, className = '', ...props }: CardProps) {
  return (
    <article className={`card ${className}`.trim()} {...props}>
      {children}
    </article>
  )
}

function CardHeader({ children, className = '', ...props }: CardHeaderProps) {
  return (
    <header className={`card__header ${className}`.trim()} {...props}>
      {children}
    </header>
  )
}

function CardBody({ children, className = '', ...props }: CardBodyProps) {
  return (
    <div className={`card__body ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

function CardFooter({ children, className = '', ...props }: CardFooterProps) {
  return (
    <footer className={`card__footer ${className}`.trim()} {...props}>
      {children}
    </footer>
  )
}

function CardSubfooter({
  children,
  className = '',
  ...props
}: CardSubfooterProps) {
  return (
    <div className={`card__subfooter ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardBody, CardFooter, CardSubfooter }