function isPrime(num) {
	if(num === 2 || num === 3) return true
	for(let i = 4; i < num / 2; i++) {
		if(num % i === 0) {
			return false
		}
	}
	return true
}

let hugeNumber = 600851475143
let factors = []
let divisor = 2

while(divisor < hugeNumber) {
	if(hugeNumber % divisor === 0) {
		factors.push(divisor)
		hugeNumber /= divisor
		divisor = 1
		console.log(factors, hugeNumber, divisor)
	}
	divisor++
}

console.log(factors)
