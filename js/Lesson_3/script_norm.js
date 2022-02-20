// let namber =+prompt('Введіть пятизначне число');

// if ( namber>99999 && namber<9999) {
//     console.log('Ви ввели неправильное число')
// }else if  (((namber%10) === (((namber-namber%10000)/10000)%10)) || (((namber-namber)/10%10) === (((namber-namber%1000)/1000)%10))) {
//     console.log('поліндром');
// } else {
//     console.log('не полиндром');
// }
    
// let sum =+prompt('введіть суму оплати');
// let three =3 //x>500
// let five =5 //300<X<500
// let seven = 7; //200<x<300


// if (  sum<200) {
//     console.log(sum);
// } else if (200<sum<300) {
//     console.log(sum*(100-three)/100);
// } else if (300<sum<500) {
//     console.log(sum*(100-five)/100);
// } else {
//     console.log(sum*(100-seven)/100);
// }



// let i =0;
// let minus = 0;
// let plus =0;
// let zero = 0;
// let double =0;
// let unpaired = 0;
// while (i<5) {
//     let value = +prompt("Введите число", '');
//     i +=1;
//     console.log(value);
//     if (value < 0) continue;
//     minus += 1;
//     if (value === 0)continue ; // (*)
//     zero += 1;
//     if (value >0 ) continue; // (*)
//     plus += 1;
//     if (value%2 === 0)continue ; // (*)
//     double += 1;
//     if (value%2 !== 0) continue; // (*)
//     unpaired += 1;
// }

// console.log(i);
// console.log(minus);
// console.log(plus);
// console.log(zero);
// console.log(double);
// console.log(unpaired);

while (true) {
    let value =+prompt('ень тижня. Хочеш побачити наступний день? ');
    console.log(value);
    if (value === null) break;
  

}