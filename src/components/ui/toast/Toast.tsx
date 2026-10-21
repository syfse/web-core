import type { HTMLAttributes, ReactNode } from 'react'
import './Toast.scss'

type ToastVariant = 'info' | 'success' | 'warning' | 'error'

type ToastProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  variant?: ToastVariant
  title?: ReactNode
  children?: ReactNode
  onDismiss?: () => void
  closeLabel?: string
}

function Toast({
  variant = 'success',
  title,
  children,
  onDismiss,
  closeLabel = 'Dismiss notification',
  role,
  className = '',
  ...props
}: ToastProps) {
  const toastRole = role ?? (variant === 'error' ? 'alert' : 'status')

  return (
    <div
      className={`toast toast--${variant} ${className}`.trim()}
      role={toastRole}
      {...props}
    >
      <span className="toast__icon" aria-hidden="true">
        {variant === 'success' ? '✓' : variant === 'error' ? '!' : 'i'}
      </span>
      <div className="toast__content">
        {title && <p className="toast__title">{title}</p>}
        {children && <div className="toast__message">{children}</div>}
      </div>
      {onDismiss && (
        <button
          className="toast__dismiss"
          type="button"
          aria-label={closeLabel}
          onClick={onDismiss}
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
    </div>
  )
}

export { Toast }
export type { ToastProps, ToastVariant }