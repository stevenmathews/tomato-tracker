import countdownTimer from './countdown_timer/main'
import firebaseLogin from './firebase_login/main'
import view from './view'
import {Observable} from 'rx'

export default function main ({DOM}) {
  const facebookLogin = firebaseLogin(DOM)
  const pomodoroTimer = countdownTimer({
    DOM,
    props$: Observable.just({
      startTimeMinutes: 0.05
    })
  },
  'pomodoro-timer')

  const vtree$ = view(
    facebookLogin.DOM,
    pomodoroTimer.DOM
  )

  return {
    DOM: vtree$,
    notification: pomodoroTimer.notification
  }
}
