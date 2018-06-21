function* fib() {
	let [old, current] = [0, 1]
	yield current
	while(true) {
		[old, current] = [current, old + current]
		yield current
	}
}

const sequence = fib()
let i = 1
 while(true) {
	let prime = sequence.next().value
	console.log(i, prime)
	if(prime.toString().length > 100) {break}
	i++
}
