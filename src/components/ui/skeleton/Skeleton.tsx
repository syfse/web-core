import type { CSSProperties, HTMLAttributes } from 'react'
import './Skeleton.scss'

type SkeletonProps = HTMLAttributes<HTMLSpanElement> & {
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}

function Skeleton({
  width = '100%',
  height = '1em',
  className = '',
  style,
  ...props
}: SkeletonProps) {
  return (
    <span
      className={`skeleton ${className}`.trim()}
      style={{ width, height, ...style }}
      {...props}
      aria-hidden="true"
    />
  )
}

export { Skeleton }
export type { SkeletonProps }