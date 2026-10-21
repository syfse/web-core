import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.scss'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger'

type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant
  children: ReactNode
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function ButtonBase({
  variant,
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonBaseProps) {
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

function PrimaryButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <ButtonBase variant="primary" className={className} {...props}>
      {children}
    </ButtonBase>
  )
}

function SecondaryButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <ButtonBase variant="secondary" className={className} {...props}>
      {children}
    </ButtonBase>
  )
}

function TertiaryButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <ButtonBase variant="tertiary" className={className} {...props}>
      {children}
    </ButtonBase>
  )
}

function DangerButton({ children, className = '', ...props }: ButtonProps) {
  return (
    <ButtonBase variant="danger" className={className} {...props}>
      {children}
    </ButtonBase>
  )
}

export { PrimaryButton, SecondaryButton, TertiaryButton, DangerButton }
export type { ButtonProps, ButtonVariant }