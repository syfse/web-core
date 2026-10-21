import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Toast } from './Toast'

describe('Toast', () => {
  it('announces a success message and dismisses when requested', () => {
    const onDismiss = vi.fn()
    render(
      <Toast title="Saved" onDismiss={onDismiss}>
        Your changes were saved.
      </Toast>,
    )

    const toast = screen.getByRole('status')
    expect(toast).toHaveClass('toast--success')
    expect(screen.getByText('Your changes were saved.')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss notification' }))
    expect(onDismiss).toHaveBeenCalledOnce()
  })

  it('uses alert semantics for errors and omits dismiss control when not provided', () => {
    render(<Toast variant="error">Could not save.</Toast>)

    expect(screen.getByRole('alert')).toHaveClass('toast--error')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})