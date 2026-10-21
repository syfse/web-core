import type { HTMLAttributes, ReactNode } from 'react'
import './StatusIndicator.scss'

type Status = 'online' | 'offline' | 'pending' | 'maintenance'

type StatusIndicatorProps = HTMLAttributes<HTMLSpanElement> & {
  status?: Status
  children?: ReactNode
}

const statusLabels: Record<Status, string> = {
  online: 'Online',
  offline: 'Offline',
  pending: 'Pending',
  maintenance: 'Maintenance',
}

function StatusIndicator({
  status = 'offline',
  children,
  className = '',
  ...props
}: StatusIndicatorProps) {
  const label = children ?? statusLabels[status]

  return (
    <span
      className={`status-indicator status-indicator--${status} ${className}`.trim()}
      {...props}
    >
      <span className="status-indicator__dot" aria-hidden="true" />
      <span>{label}</span>
    </span>
  )
}

export { StatusIndicator }
export type { Status, StatusIndicatorProps }