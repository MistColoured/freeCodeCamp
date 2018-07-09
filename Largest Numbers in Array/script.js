
testArray = [19, 7, 6, 49, 31, 23];

function maxArray(arr) {
  let max = -Infinity;
  const num = arr.length;
  for (let i = 0; i < num; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

max = maxArray(testArray);
max;

function minArray(arr) {
  let min = Infinity;
  let num = arr.length;
  while (num--) {
    console.log(num);
    if (arr[num] < min) {
      min = arr[num];
    }
  }
  return min;
}

const challenge = minArray(testArray);
