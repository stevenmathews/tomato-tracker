import {makeDOMDriver} from '@cycle/dom'
import makeNotificationDriver from './custom_drivers/notification'

export default {
  DOM: makeDOMDriver('#app'),
  notification: makeNotificationDriver()
}
