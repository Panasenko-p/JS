// let number = +prompt('Введіть число');
// let sum = 0;
// checknamber = (a)=> {
//     for  (i=0; i < number; i++) {
//         if (number%i===0) {
//             sum +=i;
//             }
//     }
//     if (sum == number){
//         return console.log(`це ідеальне число`);
//     } else {
//         return console.log(`це не ідеальне число`);
//     }   
// }
// console.log(checknamber(number));



checknamber = (a)=> {
    let sum = 0;
    for  (i=0; i < a; i++) {
        if (a%i===0) {
            sum +=i;
            }
    }
    if (sum == a){
        return console.log(`це ідеальне число`);
    } else {
        return console.log(`це не ідеальне число`);
    }   
}

let number_8 = +prompt('Введіть перше число діапозону');
let number_9 = +prompt('Введіть друге число діапозону');

checkPerfectnumber =(a,b) => {
    for (i=number_8; i<number_9; i++) {
        if (checknamber(i) === `це ідеальне число`) {
            console.log(i);
        }
    }
    if (number_8>number_9) {
        return console.log(`Ви ввели неправельні данні`);
    } else if (number_8<0 && number_9<0) {
        return console.log(`Ви ввели неправельні данні`);
    } else  {
        
    }
}

checkPerfectnumber( number_8, number_9 );