const timeRemaining = (counter, props) => props.startTimeMinutes * 60 - counter
const minutesRemaining = timeRemaining => Math.floor(timeRemaining / 60)
const secondsRemaining = timeRemaining => {
  return timeRemaining - minutesRemaining(timeRemaining) * 60
}
const formatTime = time => time > 9 ? time : '0' + time
const formattedMinutesRemaining = (counter, props) => {
  return formatTime(minutesRemaining(timeRemaining(counter, props)))
}
const formattedSecondsRemaining = (counter, props) => {
  return formatTime(secondsRemaining(timeRemaining(counter, props)))
}

module.exports = {
  formattedMinutesRemaining,
  formattedSecondsRemaining
}
