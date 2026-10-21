import { useState, type AriaAttributes, type InputHTMLAttributes, type ReactNode } from 'react'
import { TertiaryButton } from '../button/Button'
import { FormField } from './FormField'
import { useFormField } from './useFormField'

type PasswordFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'id' | 'required' | 'className' | 'type' | 'aria-describedby' | 'aria-invalid'
> & {
  id?: string
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  required?: boolean
  className?: string
  'aria-describedby'?: string
  'aria-invalid'?: AriaAttributes['aria-invalid']
}

function PasswordField({
  id,
  label,
  hint,
  error,
  required = false,
  className = '',
  'aria-describedby': describedBy,
  'aria-invalid': invalid,
  ...props
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false)
  const field = useFormField({ id, hint, error, describedBy, invalid })

  return (
    <FormField
      id={field.id}
      label={label}
      hint={hint}
      error={error}
      required={required}
      className={className}
    >
      <div className="form-field__password-control">
        <input
          {...props}
          className="form-field__input"
          id={field.id}
          type={visible ? 'text' : 'password'}
          required={required}
          aria-describedby={field.describedBy}
          aria-invalid={field.invalid}
        />
        <TertiaryButton
          className="form-field__password-toggle"
          type="button"
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
          onClick={() => setVisible((currentVisible) => !currentVisible)}
        >
          {visible ? 'Hide' : 'Show'}
        </TertiaryButton>
      </div>
    </FormField>
  )
}

export { PasswordField }
export type { PasswordFieldProps }