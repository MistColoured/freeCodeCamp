const cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];

var carsObj = cars.reduce(function (obj, name) {
  obj[name] = obj[name] ? ++obj[name] : 1;
  return obj;
}, []);

carsObj
