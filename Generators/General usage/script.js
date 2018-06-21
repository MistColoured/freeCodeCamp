function *myGenerator() {
  console.log(1);
  let a = yield 'first yield';
  console.log(a); // 2
  let b = yield 'second yield';
  console.log(b); // 3
  return 'hi';
}

let iterator = myGenerator();
// let firstYield = iterator.next(); // { value: 'first yield', done: false }
// let secondYield = iterator.next(2); // { value: 'second yield', done: false }
// let generatorReturnValue = iterator.next(3);