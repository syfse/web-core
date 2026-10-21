import { useId } from 'react'

function useFormField({ id, hint, error, describedBy, invalid }) {
  const generatedId = useId()
  const fieldId = id ?? generatedId
  const descriptions = [
    describedBy,
    hint ? `${fieldId}-hint` : null,
    error ? `${fieldId}-error` : null,
  ].filter(Boolean)

  return {
    id: fieldId,
    hintId: `${fieldId}-hint`,
    errorId: `${fieldId}-error`,
    describedBy: descriptions.length ? descriptions.join(' ') : undefined,
    invalid: error ? true : invalid,
  }
}

export { useFormField }
