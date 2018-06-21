// Only adding numbers over or under a certain value
const numbers = [1, 11, 24, 4, 3, 17];

const only = numbers.reduce((acc, val) => {
  if (val < 12) {
    acc += val;
  }
  return acc;
}, 0);

console.log(only);
