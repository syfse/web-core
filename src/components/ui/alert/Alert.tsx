import type { HTMLAttributes, ReactNode } from 'react'
import './Alert.scss'

type AlertVariant = 'info' | 'success' | 'warning' | 'error'

type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  variant?: AlertVariant
  title?: ReactNode
  action?: ReactNode
  children?: ReactNode
}

function Alert({
  variant = 'info',
  title,
  action,
  children,
  role,
  className = '',
  ...props
}: AlertProps) {
  const alertRole = role ?? (variant === 'error' ? 'alert' : 'status')

  return (
    <div
      className={`alert alert--${variant} ${className}`.trim()}
      role={alertRole}
      {...props}
    >
      <span className="alert__icon" aria-hidden="true">
        {variant === 'success' ? '✓' : variant === 'error' ? '!' : 'i'}
      </span>
      <div className="alert__content">
        {title && <p className="alert__title">{title}</p>}
        {children && <div className="alert__message">{children}</div>}
        {action && <div className="alert__action">{action}</div>}
      </div>
    </div>
  )
}

export { Alert }
export type { AlertProps, AlertVariant }