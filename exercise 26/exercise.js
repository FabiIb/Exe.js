// function sum(num1, num2, num3, num4, num5) {
//  return num1 + num2 + num3 + num4 + num5;
// }

function sum(...arg) {
    let totale = 0;
    arg.forEach(item => {totale += item });
    return totale
}
 console.log(sum(1, 2, 3, 4, 5));