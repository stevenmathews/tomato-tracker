import countdownTimer from './countdown_timer/main'
import {Observable} from 'rx'

export default function main ({DOM}) {
  const pomodoroTimer = countdownTimer({
    DOM,
    props$: Observable.just({
      startTimeMinutes: 0.05
    })
  },
  'pomodoro-timer')

  return {
    DOM: pomodoroTimer.DOM
  }
}
