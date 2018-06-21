/* ES6 */
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            console.log('She is happy')
            const phone = { name: 'Samsung'}
            resolve(phone)
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ';
    return Promise.reject(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log('fulfilled')) // fat arrow
        .catch(error => console.log('errro message')); // fat arrow
};

askMom();