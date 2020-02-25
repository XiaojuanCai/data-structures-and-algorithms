'use strict';

function get_digit_sum (n) {
  let sum = 0;
  while (n !== 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

// test get_digit_sum
// console.log(get_digit_sum(100));
// console.log(get_digit_sum(75));
// console.log(get_digit_sum(999999999999));

function equal_digit_sum (input) {
  let equal_digit_pairs = {};

  for (let n of input) {
    let key = get_digit_sum (n);
 
    if (!equal_digit_pairs[key]) {
      equal_digit_pairs[key] = [n, undefined];
      continue;
    }

    let [largest, larger] = equal_digit_pairs[key];

    if (larger === undefined || n > larger) equal_digit_pairs[key] = largest > n? [largest,n] : [n, largest];
  }

  let largest_sum = -1;

  for (let [largest, larger] of Object.values(equal_digit_pairs)) {
    if (larger === undefined) continue;
    if (largest + larger > largest_sum) largest_sum = largest + larger;
  }

  return largest_sum;
}

// test equal_digit_sum

const input = [51, 90, 200, 135];
console.log(equal_digit_sum(input));