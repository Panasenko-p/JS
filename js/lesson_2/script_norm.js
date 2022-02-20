let many = +prompt ('Введіть сумму грошей в гаманці');
let chocolate = +prompt ('Введіть варьість однієї шоколадки');
console.log ((many-many%chocolate)/chocolate);
console.log(many%chocolate);

let quantity =+prompt ('Введіть трьохзначне число');

let namber_1 = String(quantity%10);
let namber_2 = String((quantity-namber_1)/10%10);
let namber_3 = String((quantity-quantity%100)/100);
console.log(namber_1+namber_2+namber_3);





