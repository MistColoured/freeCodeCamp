// TODO: 30 Jun 18: Work out what I was trying to achieve here.

let data = `1 Mike  Allen Coder
2 Sandy Spaid Pizza Cook
3 Tina  Harding Cake  Maker
4 Matt  Chandler  Powerlifter
5 Terry Atkinsons  Coffee  Drinker
6 Lorella Palmer  Student
7 Marcos  Roig  Slow  Cyclist`

let output = data
  .trim()
  .split(/\n/)
  .map(item => ''.concat(item))
  .reduce((acc, val) => {
    return acc + JSON.parse(val)
  }, {})
  

console.log(output)
