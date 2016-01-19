import intent from './intent'
import model from './model'
import view from './view'
import htmlNotification from './helpers/html-notification'

export default function CountdownTimer ({DOM, props$}) {
  const actions = intent(DOM)
  const state$ = model(actions, props$)
  return {
    DOM: view(state$),
    notification: htmlNotification(state$)
  }
}
