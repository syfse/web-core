import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Countdown } from './Countdown'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the configured duration and updates once per second', async () => {
    render(<Countdown />)

    expect(screen.getByRole('timer')).toHaveTextContent('200')
    expect(screen.getByText('Days')).toBeInTheDocument()

    await act(async () => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByRole('timer')).toHaveTextContent('199')
    expect(screen.getByRole('timer')).toHaveTextContent('59')
  })

  it('stops at zero when the configured duration expires', async () => {
    render(<Countdown duration={{ days: 0, hours: 0, minutes: 0, seconds: 1 }} />)

    expect(screen.getByRole('timer')).toHaveTextContent('01')

    await act(async () => {
      vi.advanceTimersByTime(6000)
    })

    expect(screen.getByRole('timer')).toHaveTextContent('00')
    expect(vi.getTimerCount()).toBe(0)
  })
})
