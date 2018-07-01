// Averaging
const myTransaction = [10, 20, 30, 40, 50, 60, 70];

const average = myTransaction.reduce((acc, val, i , arr) => {
  if (i !== arr.length - 1) {
    return acc + val
  } else {
    return (acc + val) / arr.length
  }
}, 0)

average
