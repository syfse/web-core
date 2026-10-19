import { FormField } from './FormField'
import { useFormField } from './useFormField'

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
}) {
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
