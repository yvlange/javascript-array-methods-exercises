const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below
let numbersTimes2 = numbers.map((number) => {
  return number * 2;
});
console.log(numbersTimes2);

let numbersDivided2 = numbers.map((number) => {
  return number / 2;
});
console.log(numbersDivided2);

let numbersMultiplyThemselves = numbers.map((number) => {
  return number * number;
});
console.log(numbersMultiplyThemselves);
