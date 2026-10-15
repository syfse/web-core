import { useEffect, useState } from 'react'
import { COUNTDOWN_DURATION } from './countdownConfig'
import { getTotalSeconds, splitTime } from './countdownTime'
import './Countdown.scss'

function Countdown({ duration = COUNTDOWN_DURATION }) {
  const [deadline] = useState(
    () => Date.now() + getTotalSeconds(duration) * 1000,
  )
  const [remainingSeconds, setRemainingSeconds] = useState(
    () => getTotalSeconds(duration),
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
