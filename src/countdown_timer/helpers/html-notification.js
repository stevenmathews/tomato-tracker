export default function htmlNotification (state$) {
  return state$
    .filter(time => time === '00:00')
    .skip(1)
    .map(_ => {
      return {
        title: 'Pomodoro Completed!',
        body: '',
        tag: 'pomodoro-notification',
        icon: 'http://s30.postimg.org/doo1b4v71/timer.jpg'
      }
    })
}
