import { useEffect, useState } from 'react'
import { COUNTDOWN_DURATION, type CountdownDuration } from './countdownConfig'
import { getTotalSeconds, splitTime } from './countdownTime'
import './Countdown.scss'

type CountdownProps = {
  duration?: CountdownDuration
  startDate?: Date | string
}

function Countdown({
  duration = COUNTDOWN_DURATION,
  startDate = new Date('2026-10-17'),
}: CountdownProps) {
  const startTimestamp = startDate === undefined
    ? null
    : startDate instanceof Date
      ? startDate.getTime()
      : Date.parse(startDate)

  if (startTimestamp !== null && !Number.isFinite(startTimestamp)) {
    throw new RangeError('Countdown startDate must be a valid date')
  }

  const [mountedAt] = useState(() => Date.now())
  const deadline = (startTimestamp ?? mountedAt) + getTotalSeconds(duration) * 1000
  const [remainingSeconds, setRemainingSeconds] = useState(
    () => Math.max(0, Math.ceil((deadline - Date.now()) / 1000)),
  )

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000))
      setRemainingSeconds(remaining)
      return remaining
    }

    if (updateCountdown() === 0) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      if (updateCountdown() === 0) {
        window.clearInterval(intervalId)
      }
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [deadline])

  return (
    <div className="countdown" role="timer" aria-label="Countdown">
      {splitTime(remainingSeconds).map(({ label, value }) => (
        <div className="countdown__unit" key={label}>
          <span className="countdown__value">{String(value).padStart(2, '0')}</span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  )
}

export { Countdown }