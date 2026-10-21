import type { AriaAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { FormField } from './FormField'
import { useFormField } from './useFormField'

type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'id' | 'required' | 'className' | 'aria-describedby' | 'aria-invalid'
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

function Textarea({
  id,
  label,
  hint,
  error,
  required = false,
  className = '',
  'aria-describedby': describedBy,
  'aria-invalid': invalid,
  ...props
}: TextareaProps) {
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
      <textarea
        {...props}
        className="form-field__textarea"
        id={field.id}
        required={required}
        aria-describedby={field.describedBy}
        aria-invalid={field.invalid}
      />
    </FormField>
  )
}

export { Textarea }
export type { TextareaProps }