import type { CountdownDuration } from './countdownConfig'

const SECONDS_PER_DAY = 24 * 60 * 60
const SECONDS_PER_HOUR = 60 * 60
const SECONDS_PER_MINUTE = 60

type CountdownUnitLabel = 'Days' | 'Hours' | 'Minutes' | 'Seconds'

type CountdownUnit = {
  label: CountdownUnitLabel
  value: number
}

function getTotalSeconds({ days, hours, minutes, seconds }: CountdownDuration) {
  return days * SECONDS_PER_DAY
    + hours * SECONDS_PER_HOUR
    + minutes * SECONDS_PER_MINUTE
    + seconds
}

function splitTime(totalSeconds: number): CountdownUnit[] {
  const safeTotalSeconds = Math.max(0, Math.floor(totalSeconds))
  const days = Math.floor(safeTotalSeconds / SECONDS_PER_DAY)
  const hours = Math.floor((safeTotalSeconds % SECONDS_PER_DAY) / SECONDS_PER_HOUR)
  const minutes = Math.floor((safeTotalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE)
  const seconds = safeTotalSeconds % SECONDS_PER_MINUTE

  return [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ]
}

export { getTotalSeconds, splitTime }
export type { CountdownUnit, CountdownUnitLabel }