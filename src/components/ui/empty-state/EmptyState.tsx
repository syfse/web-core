import type { HTMLAttributes, ReactNode } from 'react'
import './EmptyState.scss'

type EmptyStateProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
}

function EmptyState({
  title,
  description,
  action,
  className = '',
  ...props
}: EmptyStateProps) {
  return (
    <div className={`empty-state ${className}`.trim()} {...props}>
      <h2 className="empty-state__title">{title}</h2>
      {description && <p className="empty-state__description">{description}</p>}
      {action && <div className="empty-state__action">{action}</div>}
    </div>
  )
}

export { EmptyState }
export type { EmptyStateProps }