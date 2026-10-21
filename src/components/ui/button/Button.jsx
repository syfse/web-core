import './Button.scss'

function ButtonBase({
  variant,
  children,
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      className={`button button--${variant} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

function PrimaryButton({ children, className = '', ...props }) {
  return (
    <ButtonBase variant="primary" className={className} {...props}>
      {children}
    </ButtonBase>
  )
}

function SecondaryButton({ children, className = '', ...props }) {
  return (
    <ButtonBase variant="secondary" className={className} {...props}>
      {children}
    </ButtonBase>
  )
}

function TertiaryButton({ children, className = '', ...props }) {
  return (
    <ButtonBase variant="tertiary" className={className} {...props}>
      {children}
    </ButtonBase>
  )
}

function DangerButton({ children, className = '', ...props }) {
  return (
    <ButtonBase variant="danger" className={className} {...props}>
      {children}
    </ButtonBase>
  )
}

export { PrimaryButton, SecondaryButton, TertiaryButton, DangerButton }
