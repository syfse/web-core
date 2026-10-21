import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { StatusIndicator } from './StatusIndicator'

describe('StatusIndicator', () => {
  it('communicates the online state with text as well as a visual marker', () => {
    render(<StatusIndicator status="online" />)

    const label = screen.getByText('Online')
    const indicator = label.parentElement
    expect(indicator).not.toBeNull()
    expect(indicator).toHaveClass('status-indicator--online')
    expect(
      indicator?.querySelector('.status-indicator__dot'),
    ).toHaveAttribute('aria-hidden', 'true')
  })

  it('supports a caller-provided label and defaults to offline', () => {
    const { rerender } = render(
      <StatusIndicator>Connected to region EU</StatusIndicator>,
    )

    expect(screen.getByText('Connected to region EU').parentElement).toHaveClass(
      'status-indicator--offline',
    )

    rerender(<StatusIndicator status="pending">Starting</StatusIndicator>)
    expect(screen.getByText('Starting').parentElement).toHaveClass(
      'status-indicator--pending',
    )
  })
})