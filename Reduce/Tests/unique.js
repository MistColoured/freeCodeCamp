let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

const unique = arr.reduce((acc, val) => {
  if(!acc.includes(val)) {
    acc.push(val)
  }
  return acc
}, [])

unique
