const item_1 = {
    title: `apple`, //prompt(' Назва продукту ')
    price: 100, //+prompt(' ціна  продукту ')
    amount: 2, //+prompt(' кількість продукту ')
    purchased: `true`, //confirm('  ви купили продукт  ')
}
const item_2 = {
    title: `pear`,
    price: 50,
    amount: 2,
    purchased: `true`,  
} 
const item_3 = {
    title: `mandarin`,
    price: 80,
    amount: 2,
    purchased: `false`,
}
const item_4 ={
    title: `lemon`,
    price: 70,
    amount: 2,
    purchased: `true`,
}
const shopping_list = [item_1, item_2, item_3, item_4]; //масив продуктів
console.log(shopping_list); //виводить масив
shopping_list.forEach(function(item,i){
   console.log(i+item);
   sumObject(item);
}); //перебірае масив
function sumObject(item) {
    return item.sum=item.price*item.amount;
}; //додає загальну сумму товару
console.log(shopping_list);

shopping_list.sort(function (a, b) {
    if (a.purchased < b.purchased) {
      return -1;
    }
    if (a.purchased > b.purchased) {
      return 1;
    }
    return 0;
  });//сортує по true false


//   let name = prompt('введіть назву продукту');
//   shopping_list.forEach(function(item,i) {
//       if (item.title === name) {
//         item.purchased = 'ture'; 
//       } 
//   }); // змінює folse на  true
console.log(shopping_list);


function shop_false(item){
    if (item.purchased === 'false')
    return true;
}//перевіряє елементи масиву куплені чи ні  
    
let shopping_folse = shopping_list.filter(shop_false);// створює масив з false
console.log(shopping_folse);

// let name = prompt('введіть назву продукту');
// let shop_delete =shopping_list.filter(function(item){return item.title !== name})
// console.log(shop_delete);

// shopping_list.slice((indexof('mandarin',0)),1);
// console.log(shopping_list);


// let name = prompt('введіть назву продукту');
// let buy = +prompt('введіть кількість продукту');
// shopping_list.forEach(function(item,i) {
//     let number_buy = buy;
//     if (item.title === name) {
//         item.amount = item.amount+number_buy; 
//     } 
// }); // збільшує кількість на задану суму

shopping_list.forEach(function(item,i){
    sumObject(item);
 });
 console.log(shopping_list);

// shopping_list.forEach(function(item,i){
//     let sum_many
//     sum_many +=item.sum;
//     console.log(sum_many);
// });




