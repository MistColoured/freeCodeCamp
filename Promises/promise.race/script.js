// const promise1 = Promise.reject(111)

// const promise2 = Promise.resolve(222)

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Yup')
})

Promise.race([promise3])
.then(value => console.log(value))
.catch(err => console.error(err))