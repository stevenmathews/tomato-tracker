import createCountdown from './helpers/create-countdown'

export default function model (actions, props$) {
  return actions.startTimer$
    .map(
      createCountdown(props$)
      .takeWhile(time => time >= '00:00')
      .takeUntil(actions.stopTimer$)
    )
    .switch()
    .startWith('00:00')
}
