let data = `1 Mike  Allen Coder
2 Sandy Spaid Pizza Cook
3 Tina  Harding Cake  Maker
4 Matt  Chandler  Powerlifter
5 Terry Atkinson  Coffee  Drinker
6 Lorella Palmer  Student
7 Marcos  Roig  Slow  Cyclist`

let output = data
.trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = []
    return customers
}, {})

console.log(output);
