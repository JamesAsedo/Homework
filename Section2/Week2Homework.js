let pizzaPlace = "James' Pizza Palace";
let numberOfToppings = 10
console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);
console.log(`Welcome to ${pizzaPlace}! We have a variety of crusts and offer up to ${numberOfToppings} different toppings.`);
if (numberOfToppings < 10) {
  console.log(`Quality, not quantity.`);
} else {
  console.log(`A whole lot of pizza.`)
}
if (numberOfToppings >= 10){
  console.log(`A whole lot of pizza.`)
} else {
  console.log(`Quality, not quantity.`)
}
let i = 0;
undefined
while (i <= numberOfToppings) {
    i += 1;
    if (i % 2 == 0) {
        console.log(`${pizzaPlace} offers a whole lot of pizzas.`);
    }
}
