import type { AriaAttributes, ReactNode, SelectHTMLAttributes } from 'react'
import { FormField } from './FormField'
import { useFormField } from './useFormField'

type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'id' | 'required' | 'className' | 'aria-describedby' | 'aria-invalid'
> & {
  id?: string
  label?: ReactNode
  hint?: ReactNode
  error?: ReactNode
  required?: boolean
  className?: string
  children?: ReactNode
  'aria-describedby'?: string
  'aria-invalid'?: AriaAttributes['aria-invalid']
}

function Select({
  id,
  label,
  hint,
  error,
  required = false,
  className = '',
  children,
  'aria-describedby': describedBy,
  'aria-invalid': invalid,
  ...props
}: SelectProps) {
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
      <select
        {...props}
        className="form-field__select"
        id={field.id}
        required={required}
        aria-describedby={field.describedBy}
        aria-invalid={field.invalid}
      >
        {children}
      </select>
    </FormField>
  )
}

export { Select }
export type { SelectProps }