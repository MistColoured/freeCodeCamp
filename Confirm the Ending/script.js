function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

const challenge = confirmEnding('Open Sesame', 'same');
challenge;
