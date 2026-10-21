import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders compact text with its selected style and native props', () => {
    render(
      <Badge variant="success" className="custom-badge" data-testid="active">
        Active
      </Badge>,
    )

    const badge = screen.getByText('Active')
    expect(badge).toHaveClass('badge--success', 'custom-badge')
    expect(badge).toHaveAttribute('data-testid', 'active')
  })

  it('defaults to the neutral variant', () => {
    render(<Badge>Draft</Badge>)

    expect(screen.getByText('Draft')).toHaveClass('badge--neutral')
  })
})