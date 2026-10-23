import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders an accessible loading indicator', () => {
    render(<Spinner label="Loading profile" />)

    expect(screen.getByRole('status')).toHaveAccessibleName('Loading profile')
  })

  it('defaults to a generic loading label', () => {
    render(<Spinner />)

    expect(screen.getByRole('status')).toHaveAccessibleName('Loading')
  })
})