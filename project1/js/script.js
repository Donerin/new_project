const lines = 6;
let result = '';
for ( let i =0; i < lines; i ++) {
  for (let j =0; j < i; j++) {
    result += ' ';
  }
  for (let k = 0; k < 11 - i * 2; k++) {
    result += '*';
  }

result += '\n';
}
console.log(result);


const someFun = (arr) => {
  for (let i = 1; i < Infinity; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

console.log(someFun([ 1, 2, 3]));


const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };

  return iter(2);
}