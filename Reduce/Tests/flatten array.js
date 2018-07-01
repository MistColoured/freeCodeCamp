// Flattening an array
const data = [ [8, 7, 6], [5, 4], [3]];

const flatten = data.reduce((acc, val) => {
  return acc.concat(val)
}, [])

flatten