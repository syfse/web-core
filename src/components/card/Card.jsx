import './card.scss'

function Card({ children, className = '', ...props }) {
  return (
    <article className={`card ${className}`.trim()} {...props}>
      {children}
    </article>
  )
}

function CardHeader({ children, className = '', ...props }) {
  return (
    <header className={`card__header ${className}`.trim()} {...props}>
      {children}
    </header>
  )
}

function CardBody({ children, className = '', ...props }) {
  return (
    <div className={`card__body ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

function CardFooter({ children, className = '', ...props }) {
  return (
    <footer className={`card__footer ${className}`.trim()} {...props}>
      {children}
    </footer>
  )
}

function CardSubfooter({ children, className = '', ...props }) {
  return (
    <div className={`card__subfooter ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardBody, CardFooter, CardSubfooter }
