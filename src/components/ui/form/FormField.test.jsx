import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Checkbox } from './Checkbox'
import { FormField } from './FormField'
import { PasswordField } from './PasswordField'
import { Select } from './Select'
import { Textarea } from './Textarea'
import { TextField } from './TextField'

describe('Form components', () => {
  it('associates a text field with its label, hint, and validation error', () => {
    render(
      <TextField
        label="Email address"
        hint="Use your account email."
        error="Enter a valid email address."
        required
        type="email"
        autoComplete="email"
      />,
    )

    const field = screen.getByRole('textbox', { name: 'Email address' })
    expect(field).toHaveAttribute('type', 'email')
    expect(field).toHaveAttribute('autocomplete', 'email')
    expect(field).toBeRequired()
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveAccessibleDescription(
      'Use your account email. Enter a valid email address.',
    )
  })

  it('toggles password visibility without changing the entered value', () => {
    render(<PasswordField label="Password" autoComplete="current-password" />)

    const field = screen.getByLabelText('Password')
    fireEvent.change(field, { target: { value: 'example-secret' } })
    expect(field).toHaveAttribute('type', 'password')

    fireEvent.click(screen.getByRole('button', { name: 'Show password' }))
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Password')).toHaveValue('example-secret')

    fireEvent.click(screen.getByRole('button', { name: 'Hide password' }))
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
  })

  it('renders a checkbox with a clickable label and optional hint', () => {
    render(
      <Checkbox
        label="Accept terms"
        hint="Required to continue."
        name="terms"
        value="accepted"
      />,
    )

    const checkbox = screen.getByRole('checkbox', { name: 'Accept terms' })
    expect(checkbox).toHaveAttribute('name', 'terms')
    expect(checkbox).toHaveAccessibleDescription('Required to continue.')
    fireEvent.click(screen.getByText('Accept terms'))
    expect(checkbox).toBeChecked()
  })

  it('supports native select options and forwards native props', () => {
    render(
      <Select label="Region" name="region" defaultValue="">
        <option value="">Choose a region</option>
        <option value="eu">Europe</option>
      </Select>,
    )

    const select = screen.getByRole('combobox', { name: 'Region' })
    expect(select).toHaveAttribute('name', 'region')
    fireEvent.change(select, { target: { value: 'eu' } })
    expect(select).toHaveValue('eu')
  })

  it('renders a textarea with a caller-provided id and described-by value', () => {
    render(
      <Textarea
        id="description"
        label="Description"
        hint="Keep it brief."
        aria-describedby="extra-help"
        maxLength={200}
      />,
    )

    const textarea = screen.getByRole('textbox', { name: 'Description' })
    expect(textarea).toHaveAttribute('id', 'description')
    expect(textarea).toHaveAttribute(
      'aria-describedby',
      'extra-help description-hint',
    )
    expect(textarea).toHaveAttribute('maxlength', '200')
  })

  it('provides a reusable field wrapper for custom controls', () => {
    render(
      <FormField id="custom-control" label="Custom field">
        <input id="custom-control" />
      </FormField>,
    )

    expect(screen.getByLabelText('Custom field')).toHaveAttribute(
      'id',
      'custom-control',
    )
  })
})
