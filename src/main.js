import countdownTimer from './countdown_timer/index'
import {Observable} from 'rx'

export default function main ({DOM}) {
  const pomodoroTimer = countdownTimer({
    DOM,
    props$: Observable.of({
      startTimeMinutes: 0.05
    })
  })
  const vtree$ = pomodoroTimer.DOM

  return {
    DOM: vtree$,
    notification: pomodoroTimer.notification
  }
}
