const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = function (value) {
  console.log(value);
};

//const sum1 = sum(2, 4)
//const sum2 =  sum(2, 5)
//const product = multiply(sum(2, 4), sum(2, 5))
//const subtracting = subtract(multiply(sum(2, 4), sum(2, 5)), 2)
//const quotient = divide(subtract(multiply(sum(2, 4), sum(2, 5)), 2), 5)
log(divide(subtract(multiply(sum(2, 4), sum(2, 5)), 2), 5));


