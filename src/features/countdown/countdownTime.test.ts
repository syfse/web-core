import { describe, expect, it } from 'vitest'
import { getTotalSeconds, splitTime } from './countdownTime'

describe('getTotalSeconds', () => {
  it('converts all configured duration units to seconds', () => {
    expect(getTotalSeconds({ days: 2, hours: 3, minutes: 4, seconds: 5 }))
      .toBe(183845)
  })
})

describe('splitTime', () => {
  it('splits remaining seconds into days, hours, minutes, and seconds', () => {
    expect(splitTime(183845)).toEqual([
      { label: 'Days', value: 2 },
      { label: 'Hours', value: 3 },
      { label: 'Minutes', value: 4 },
      { label: 'Seconds', value: 5 },
    ])
  })

  it('returns zero for expired or negative countdown values', () => {
    expect(splitTime(-1)).toEqual([
      { label: 'Days', value: 0 },
      { label: 'Hours', value: 0 },
      { label: 'Minutes', value: 0 },
      { label: 'Seconds', value: 0 },
    ])
  })

  it('keeps hours and minutes within their respective units', () => {
    expect(splitTime(SECONDS_IN_DAY - 1)).toEqual([
      { label: 'Days', value: 0 },
      { label: 'Hours', value: 23 },
      { label: 'Minutes', value: 59 },
      { label: 'Seconds', value: 59 },
    ])
  })
})

const SECONDS_IN_DAY = 24 * 60 * 60