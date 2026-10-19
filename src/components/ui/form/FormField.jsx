import './FormField.scss'

function FormField({
  id,
  label,
  hint,
  error,
  required = false,
  inline = false,
  className = '',
  children,
  ...props
}) {
  const fieldClassName = [
    'form-field',
    inline && 'form-field--inline',
    error && 'form-field--invalid',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={fieldClassName} {...props}>
      {label && (
        <label className="form-field__label" htmlFor={id}>
          {label}
          {required && (
            <span className="form-field__required" aria-hidden="true">
              {' '}*
            </span>
          )}
        </label>
      )}
      <div className="form-field__control">{children}</div>
      {hint && (
        <span className="form-field__hint" id={`${id}-hint`}>
          {hint}
        </span>
      )}
      {error && (
        <span className="form-field__error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  )
}

export { FormField }
