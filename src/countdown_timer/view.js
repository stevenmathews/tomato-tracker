import {div, i, p} from '@cycle/dom'

export default function view (state$, name) {
  return state$.map((time) =>
    div('.timer', [
      i('.start-timer-icon.fa.fa-play.fa-lg'),
      i('.stop-timer-icon.fa.fa-stop.fa-lg'),
      p('.time', time)
    ])
  )
}
