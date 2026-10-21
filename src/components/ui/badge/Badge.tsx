import type { HTMLAttributes, ReactNode } from 'react'
import './Badge.scss'

type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
  children?: ReactNode
}

function Badge({
  variant = 'neutral',
  children,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`badge badge--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  )
}

export { Badge }
export type { BadgeProps, BadgeVariant }