import {Observable} from 'rx'

export default function countdownFromProps (props$, formattedTime) {
  const counter$ = Observable.interval(1000)
  return counter$.withLatestFrom(props$, (counter, props) => {
    return formattedTime(counter, props)
  })
}
