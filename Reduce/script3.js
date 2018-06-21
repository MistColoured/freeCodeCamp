// Flattening an array
const data = [ [8, 7, 6], [5, 4], [3]];

let flatten = data.reduce((acc, val) => acc.concat(val), []);
console.log(flatten);

// Averaging
const myTransaction = [15, 3, 6];

const average = myTransaction.reduce((acc, val, index, arr) => {
  acc += val;
  if (index === arr.length - 1) {
    return acc /= arr.length;
  }
  return acc;
});

console.log(average);
