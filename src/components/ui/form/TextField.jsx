import { FormField } from './FormField'
import { useFormField } from './useFormField'

function TextField({
  id,
  label,
  hint,
  error,
  required = false,
  className = '',
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
      <input
        {...props}
        className="form-field__input"
        id={field.id}
        required={required}
        aria-describedby={field.describedBy}
        aria-invalid={field.invalid}
      />
    </FormField>
  )
}

export { TextField }
