import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  DangerButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './Button'

describe('Button components', () => {
  it('renders each button variant with its matching style', () => {
    render(
      <>
        <PrimaryButton>Continue</PrimaryButton>
        <SecondaryButton>Back</SecondaryButton>
        <TertiaryButton>Learn more</TertiaryButton>
        <DangerButton>Delete</DangerButton>
      </>,
    )

    expect(screen.getByRole('button', { name: 'Continue' })).toHaveClass(
      'button--primary',
    )
    expect(screen.getByRole('button', { name: 'Back' })).toHaveClass(
      'button--secondary',
    )
    expect(screen.getByRole('button', { name: 'Learn more' })).toHaveClass(
      'button--tertiary',
    )
    expect(screen.getByRole('button', { name: 'Delete' })).toHaveClass(
      'button--danger',
    )
  })

  it('forwards native button props and defaults to a non-submit button', () => {
    render(
      <PrimaryButton
        aria-label="Save changes"
        className="custom-button"
        disabled
        type="submit"
      >
        Save
      </PrimaryButton>,
    )

    const button = screen.getByRole('button', { name: 'Save changes' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('button--primary', 'custom-button')
  })

  it('uses button type by default', () => {
    render(<SecondaryButton>Cancel</SecondaryButton>)

    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveAttribute(
      'type',
      'button',
    )
  })
})
