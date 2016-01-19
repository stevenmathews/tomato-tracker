import countdownTimer from './countdown_timer/index'
import firebaseLogin from './firebase_login/main'
import view from './view'
import {Observable} from 'rx'

export default function main ({DOM}) {
  const facebookLogin = firebaseLogin(DOM)
  const pomodoroTimer = countdownTimer({
    DOM,
    props$: Observable.of({
      startTimeMinutes: 0.05
    })
  })

  const vtree$ = view(
    facebookLogin.DOM,
    pomodoroTimer.DOM
  )

  return {
    DOM: vtree$,
    notification: pomodoroTimer.notification
  }
}
