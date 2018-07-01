// Simple totalling of amounts

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

const total = (acc, val) => acc + val;

const totalAmount = orders.reduce((acc, value) => acc + value.amount, 0)

totalAmount
