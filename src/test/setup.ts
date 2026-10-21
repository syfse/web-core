import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

afterEach(() => {
  cleanup()
  document.documentElement.removeAttribute('data-theme')
  vi.unstubAllGlobals()
})