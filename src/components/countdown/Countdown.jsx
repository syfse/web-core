import { useEffect, useState } from 'react'
import './countdown.scss'

const COUNTDOWN_DURATION = {
  days: 200,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

const SECONDS_PER_DAY = 24 * 60 * 60
const SECONDS_PER_HOUR = 60 * 60
const SECONDS_PER_MINUTE = 60

function getTotalSeconds({ days, hours, minutes, seconds }) {
  return days * SECONDS_PER_DAY
    + hours * SECONDS_PER_HOUR
    + minutes * SECONDS_PER_MINUTE
    + seconds
}

function splitTime(totalSeconds) {
  const days = Math.floor(totalSeconds / SECONDS_PER_DAY)
  const hours = Math.floor((totalSeconds % SECONDS_PER_DAY) / SECONDS_PER_HOUR)
  const minutes = Math.floor((totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE)
  const seconds = totalSeconds % SECONDS_PER_MINUTE

  return [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ]
}

function Countdown() {
  const [deadline] = useState(() => Date.now() + getTotalSeconds(COUNTDOWN_DURATION) * 1000)
  const [remainingSeconds, setRemainingSeconds] = useState(() => getTotalSeconds(COUNTDOWN_DURATION))

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

export default Countdown
