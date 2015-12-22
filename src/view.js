import {Observable} from 'rx'
import {div} from '@cycle/dom'

export default function view (login, timer) {
  return Observable.combineLatest(
    login,
    timer,
    (login, timer) => {
      return div('.content', [
        login,
        timer
      ])
    }
  )
}
