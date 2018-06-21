const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve('one'), 3000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('two');
  }, 1000);
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(function() {
    reject('three');
  }, 4000);
})

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))
  .catch(err => console.log('Mikes error:', err))

