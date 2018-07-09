const myObj = [
  {
    forename: 'Mike',
    surname: 'Allen',
  },
  {
    forname: 'Terry',
    surname: 'Atkinson',
  },
];

// Using spread operator
const spread = [...myObj];
spread.push({ name: 'Allen' });

// Slice
const sliced = myObj.slice();
sliced;

// Array.from

const arrayFrom = Array.from(myObj);
arrayFrom;

// concat
const concatted = [].concat(myObj);
concatted;

// Object.assign
const assigned = Object.assign({}, myObj);
assigned;

myObj;
