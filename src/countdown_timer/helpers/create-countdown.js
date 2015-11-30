import {formattedMinutesRemaining, formattedSecondsRemaining} from './time-remaining'
import countdownFromProps from './countdown-from-props.js'

export default function createCountdown (props$) {
  const minutes$ = countdownFromProps(props$, formattedMinutesRemaining)
  const seconds$ = countdownFromProps(props$, formattedSecondsRemaining)
  return minutes$.zip(seconds$, (minutes, seconds) => minutes + ':' + seconds)
}
