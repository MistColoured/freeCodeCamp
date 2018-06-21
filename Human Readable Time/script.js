// function humanReadable(seconds) {
//   let hours = parseInt(seconds / 3600).toString().padStart(2, '0')
//   let mins = (parseInt(seconds / 60) % 60).toString().padStart(2, '0')
//   let secs = (seconds % 60).toString().padStart(2, '0')
//   return `${hours}:${mins}:${secs}`
// }

function humanReadable(seconds) {
  return [seconds / 3600, seconds / 60 % 60, seconds % 60].map(val => {
    val = parseInt(val).toString()
    return val.length === 1 ? '0' + val : val
  }).join(':')
}

const answer = humanReadable(3720)
answer
