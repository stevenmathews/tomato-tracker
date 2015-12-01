import {makeDOMDriver} from '@cycle/dom'
import makeNotificationDriver from '../drivers/notification'

export default {
  DOM: makeDOMDriver('#app'),
  notification: makeNotificationDriver()
}
