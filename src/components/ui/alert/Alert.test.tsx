import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders a persistent message with title, action, and status semantics', () => {
    render(
      <Alert title="Saved" action={<button type="button">Undo</button>}>
        Your changes are up to date.
      </Alert>,
    )

    expect(screen.getByRole('status')).toHaveClass('alert--info')
    expect(screen.getByText('Saved')).toBeInTheDocument()
    expect(screen.getByText('Your changes are up to date.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument()
  })

  it('uses assertive alert semantics for errors and forwards DOM props', () => {
    render(
      <Alert variant="error" data-testid="error-alert" onClick={vi.fn()}>
        Something went wrong.
      </Alert>,
    )

    const alert = screen.getByRole('alert')
    expect(alert).toHaveClass('alert--error')
    expect(alert).toHaveAttribute('data-testid', 'error-alert')
    expect(alert.querySelector('.alert__icon')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })
})