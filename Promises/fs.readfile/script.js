const fs = require('fs')

const promise = new Promise((resolve, reject) => {
    console.log('Start')
    fs.readFile('dummy.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('There was an error')
            reject(err)
        } else {
            console.log('Data was read')
            resolve(data)
        }

    })
}).then(function(data) {
    console.log(data)
}).catch(function(err) {
    console.log(err)
})