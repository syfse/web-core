import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ThemeToggle } from '../../components/layout/ThemeToggle'
import { ThemeProvider } from './ThemeProvider'
import { useTheme } from './useTheme'

function ThemeStatus() {
  const { currentTheme } = useTheme()

  return <span>Current theme: {currentTheme}</span>
}

function mockSystemTheme(isDark) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn(() => ({ matches: isDark })),
  })
}

describe('ThemeProvider', () => {
  afterEach(() => {
    delete window.matchMedia
  })

  it('starts with the system preference and updates the root with the selected theme', () => {
    mockSystemTheme(true)
    const themeColor = document.createElement('meta')
    themeColor.name = 'theme-color'
    document.head.append(themeColor)

    render(
      <ThemeProvider>
        <ThemeStatus />
        <ThemeToggle />
      </ThemeProvider>,
    )

    expect(screen.getByText('Current theme: dark')).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(themeColor).toHaveAttribute('content', '#202522')

    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }))

    expect(screen.getByText('Current theme: light')).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(themeColor).toHaveAttribute('content', '#f6f4ef')
  })

  it('provides the light theme when the system preference is light', () => {
    mockSystemTheme(false)

    render(
      <ThemeProvider>
        <ThemeStatus />
      </ThemeProvider>,
    )

    expect(screen.getByText('Current theme: light')).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
  })
})
