// const NAME = function () {};
// function NAME_2() {};
// (function NAME_3 () {});
// NAME_4 = () =>{};

// function getargum( ){
//     console.log(arguments.length);
// };
// getargum (516,'sf',54165,16516,'sdfs',);

// let namber_1 = +prompt('Введіть перше число');
// let namber_2 = +prompt('Введіть друге число')

// function checknamber (a,b) {
//     if (a<b) {
//         console.log(-1);
//         } else if (a=b) {
//         console.log(1);
//         } else  {
//         console.log(0);
//         };
// }
// checknamber (namber_1,namber_2) ;



// let namber_3 = +prompt('Введіть перше число');
// function factorial(x) 
// { 
//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// console.log(factorial(namber_3));

// let namber_1 = +prompt('Введіть перше число');
// let namber_2 = +prompt('Введіть перше число');
// let namber_3 = +prompt('Введіть перше число');

// getsumsimvol = (a,b,c) =>{
//     return (String(a)+String(b)+String(c));
// };

// console.log(getsumsimvol (namber_1, namber_2, namber_3));

let length = +prompt('Введіть довжину прямокутника');
let width = +prompt('Введіть ширину прямокутника');

getarea = (a,b) =>{
    if (a<0 && a<b) {
        return console.log('Ви ввели неправельне число')
    }
    else if (a===0 ) {
        return b*b;
    } else if (b === 0) {
        return a*a;
    } else {
        return a*b ;
    }
}

console.log(getarea(length, width));
