let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

let result = arr.sort().reduce((acc, val) => {
  if(acc.length === 0 || acc[acc.length - 1] !== val) {
    acc.push(val);
  }
  return acc;
 }, [])

console.log(result)
