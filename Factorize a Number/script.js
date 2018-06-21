function factorialize (num) {
  return num > 1 ? factorialize(num - 1) * num : 1
}

const challenge = factorialize(6)
document.getElementById('app').innerText=challenge
