var thing = {'hello': 'main'};
console.log('main', thing);

(() => {
  var thing = {'hello': 'other'}
  console.log('otherOne', thing)
})();


