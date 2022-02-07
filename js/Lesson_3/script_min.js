let age = +prompt('ведіть свій вік');

let baby = ('Ви є дитиною');  // <11
let teenager =('Ви є підлітком'); //<17 
let adult = ('Ви є дорослим'); //<59
let pensioner = ('Ви є пенсіонер');//>59

if (age<0) {
    console.log('Ви ввели неправельні данні');
    } else if (age<11) {
        console.log(baby);
    } else if (age<17){
        console.log(teenager);
    } else if (age<59) {
        console.log(adult);
    } else if (age<159){
        console.log (pensioner);
    } else {
        console.log('Ви ввели неправельні данні')
    };

let namber = +prompt('число від 1 до 9');
console.log(namber);

if (namber < 0) {
    console.log('Ви ввели неправельні данні');
    } else if (namber === 1) {
        console.log('!');
    } else if (namber === 2) {
        console.log('@');
    } else if (namber === 3) {
        console.log('#');
    } else if (namber === 4) {
        console.log('$');
    } else if (namber === 5) {
        console.log('%');
    } else if (namber === 6) {
        console.log('^');
    } else if (namber === 7) {
        console.log('&');
    } else if (namber === 8) {
        console.log('*');
    } else if (namber === 9) {
        console.log('()');
    } else {
        console.log('Ви ввели неправельні данні');
    };

let namber_1 =+prompt('Введіть перше число');
let namber_2 =+prompt('Введіть друге число');
let first =0;
for (let i =namber_1+1; i<namber_2; i++) {
    console.log (first +=i);
}



let namber_3 =+prompt('Введіть перше число');
let namber_4 =+prompt('Введіть друге число');
let i = 1;
while (i < namber_3) {
    i++;
    if (namber_3%i===0) {
        break;
    }
}
console.log(i);
let a = 1;
while (a < namber_4) {
    a++;
    if (namber_4%a===0) {
        break;
    }
}
console.log(a);
let nsd = a===i ? a : a*i;
console.log(nsd);

let namber_5 =+prompt('Введіть перше число');
for (let i = 1; i<=namber_5; i++) {
    if ( namber_5%i===0){
        console.log(i);
        continue; 
        }
    };




