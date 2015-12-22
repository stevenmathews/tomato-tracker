import {button} from '@cycle/dom'
import {Observable} from 'rx'
import Firebase from 'firebase'
const ref = new Firebase('https://tomatotracker.firebaseio.com')

function intent (DOM) {
  return {
    loginClick$: DOM.select('.login').events('click')
  }
}

function model (actions) {
  const authWithOAuthPopup = Observable.fromNodeCallback(
    ref.authWithOAuthPopup,
    ref
  )
  return actions.loginClick$
    .map(_ => authWithOAuthPopup('facebook'))
    .mergeAll()
}

function view () {
  return Observable.just(button('.login', 'Facebook Login'))
}

export default function login (DOM) {
  const oauth$ = model(intent(DOM))
  return {
    DOM: view(),
    oauth$
  }
}
