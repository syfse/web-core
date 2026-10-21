import type { AriaAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { FormField } from './FormField'
import { useFormField } from './useFormField'

type CheckboxProps = Omit<
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

function Checkbox({
  id,
  label,
  hint,
  error,
  required = false,
  className = '',
  'aria-describedby': describedBy,
  'aria-invalid': invalid,
  ...props
}: CheckboxProps) {
  const field = useFormField({ id, hint, error, describedBy, invalid })

  return (
    <FormField
      id={field.id}
      label={label}
      hint={hint}
      error={error}
      required={required}
      inline
      className={className}
    >
      <input
        {...props}
        className="form-field__checkbox"
        id={field.id}
        type="checkbox"
        required={required}
        aria-describedby={field.describedBy}
        aria-invalid={field.invalid}
      />
    </FormField>
  )
}

export { Checkbox }
export type { CheckboxProps }