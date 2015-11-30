import {div, i, p} from '@cycle/dom'
import createCountdown from './helpers/create-countdown'

function intent (DOM) {
  return {
    stopTimer$: DOM.select('.stop-timer-icon').events('click'),
    startTimer$: DOM.select('.start-timer-icon').events('click')
  }
}

function model (actions, props$) {
  return actions.startTimer$
    .map(
      createCountdown(props$)
      .takeWhile(time => time >= '00:00')
      .takeUntil(actions.stopTimer$)
    )
    .switch()
    .startWith('00:00')
}

function view (state$, name) {
  return state$.map((time) =>
    div(`.${name}`, [
      i('.start-timer-icon.fa.fa-play.fa-lg'),
      i('.stop-timer-icon.fa.fa-stop.fa-lg'),
      p('.time', time)
    ])
  )
}

export default function countdownTimer ({DOM, props$}, name = '') {
  const actions = intent(DOM)
  const state$ = model(actions, props$)
  return {
    DOM: view(state$, name)
  }
}
