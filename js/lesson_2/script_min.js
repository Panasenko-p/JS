let a = '0.1';
let b = '0.2';

console.log( (+a*10 + +b*10)/10);

let c = '1';
let d = 2;


console.log( +c + d);
console.log(Number(c) + d);


const FILE =0.820;
let memory =+prompt(`Введіть обє'єм памяті в ГБ `);
// console.log ( memory % FILE );
console.log ( (memory - memory%FILE)/FILE);