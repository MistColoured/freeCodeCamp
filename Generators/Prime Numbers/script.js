function isPrime(num) {
	if(num === 2 || num === 3) return true
	for(let i = 2; i < num; i++) {
		if(num % i === 0) {
			return false
		}
	}
	return true
}

function* primes() {
	let current = 3
	yield current
	while(true) {
		current += 2
		while(!isPrime(current)) {
			current += 2
		}
		yield current
	}
}

let primeNumbers = primes()
let allPrimes = [2]

for (let i = 3; i < 2000000; i++) {
	if (isPrime(i)) {
		allPrimes.push(i)
	}
}

console.log(allPrimes.reduce((previous, current) => current + previous, 0))