let namber = +prompt('Введіть число');
let sum = 0;
checknamber = (a)=> {
    for  (i=0; i < namber; i++) {
        if (namber%i===0) {
            sum +=i;
    }
    if (sum == namber){
        console.log(`це ідеальне число`)
    } else {
        console.log(`це не ідеальне число`)
    }
    }   
}
console.log(checknamber(namber));