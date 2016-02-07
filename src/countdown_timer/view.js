import {div, p, img} from '@cycle/dom'

export default function view (state$, name) {
  return state$.map((time) =>
    div('.timer', [
      img('.start-timer-icon', {src: '/images/play.svg'}),
      img('.stop-timer-icon', {src: '/images/stop.svg'}),
      p('.time', time)
    ])
  )
}
