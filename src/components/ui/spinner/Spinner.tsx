import type { HTMLAttributes } from 'react'
import './Spinner.scss'

type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  label?: string
}

function Spinner({ label = 'Loading', className = '', ...props }: SpinnerProps) {
  return (
    <span
      className={`spinner ${className}`.trim()}
      role="status"
      aria-label={label}
      {...props}
    />
  )
}

export { Spinner }
export type { SpinnerProps }