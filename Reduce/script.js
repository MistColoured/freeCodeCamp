// Simple totalling of amounts

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

const total = (acc, val) => acc + val;

const totalAmount = orders.map(el => el.amount).reduce(total, 0)

console.log(totalAmount);
