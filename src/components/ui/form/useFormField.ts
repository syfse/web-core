import { useId, type AriaAttributes } from 'react'

type UseFormFieldOptions = {
  id?: string
  hint?: unknown
  error?: unknown
  describedBy?: string
  invalid?: AriaAttributes['aria-invalid']
}

function useFormField({
  id,
  hint,
  error,
  describedBy,
  invalid,
}: UseFormFieldOptions) {
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
export type { UseFormFieldOptions }