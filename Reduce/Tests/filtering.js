// Only adding numbers over or under a certain value
const numbers = [1, 11, 24, 4, 3, 17];

const only = numbers.reduce((acc, val) => {
  if (val > 6) {
    return acc + val
  } else {
    return acc
  }
}, 0)

only
