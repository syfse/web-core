import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EmptyState } from './EmptyState'

describe('EmptyState', () => {
  it('renders its title, description, and action', () => {
    render(
      <EmptyState
        title="No servers"
        description="Nothing here yet."
        action={<button>Add server</button>}
      />,
    )

    expect(screen.getByText('No servers')).toBeInTheDocument()
    expect(screen.getByText('Nothing here yet.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add server' })).toBeInTheDocument()
  })

  it('omits description and action when not provided', () => {
    render(<EmptyState title="Nothing found" />)

    expect(screen.getByText('Nothing found')).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})