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
    render(<Countdown startDate="2026-01-01T00:00:00Z" />)

    expect(screen.getByRole('timer')).toHaveTextContent('200')
    expect(screen.getByText('Days')).toBeInTheDocument()

    await act(async () => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByRole('timer')).toHaveTextContent('199')
    expect(screen.getByRole('timer')).toHaveTextContent('59')
  })

  it('calculates the remaining duration from a past start date', () => {
    vi.setSystemTime(new Date('2026-01-02T01:01:01Z'))

    render(
      <Countdown
        startDate="2026-01-01T00:00:00Z"
        duration={{ days: 200, hours: 0, minutes: 0, seconds: 0 }}
      />,
    )

    const timer = screen.getByRole('timer')
    expect(timer).toHaveTextContent('198')
    expect(timer).toHaveTextContent('22')
    expect(timer).toHaveTextContent('58')
    expect(timer).toHaveTextContent('59')
  })

  it('includes time until a future start date in the countdown', () => {
    render(
      <Countdown
        startDate={new Date('2026-01-02T00:00:00Z')}
        duration={{ days: 1, hours: 0, minutes: 0, seconds: 0 }}
      />,
    )

    expect(screen.getByRole('timer')).toHaveTextContent('02')
  })

  it('rejects an invalid start date', () => {
    expect(() => render(<Countdown startDate="not-a-date" />)).toThrow(
      'Countdown startDate must be a valid date',
    )
  })

  it('stops at zero when the configured duration expires', async () => {
    render(
      <Countdown
        startDate="2026-01-01T00:00:00Z"
        duration={{ days: 0, hours: 0, minutes: 0, seconds: 1 }}
      />,
    )

    expect(screen.getByRole('timer')).toHaveTextContent('01')

    await act(async () => {
      vi.advanceTimersByTime(6000)
    })

    expect(screen.getByRole('timer')).toHaveTextContent('00')
    expect(vi.getTimerCount()).toBe(0)
  })
})