import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders a hidden placeholder with the requested dimensions', () => {
    const { container } = render(<Skeleton width={80} height={16} />)

    const skeleton = container.firstChild as HTMLElement
    expect(skeleton).toHaveClass('skeleton')
    expect(skeleton).toHaveAttribute('aria-hidden', 'true')
    expect(skeleton).toHaveStyle({ width: '80px', height: '16px' })
  })
})