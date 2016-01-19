export default function intent (DOM) {
  return {
    stopTimer$: DOM.select('.stop-timer-icon').events('click'),
    startTimer$: DOM.select('.start-timer-icon').events('click')
  }
}
