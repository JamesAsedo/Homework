let pizzaToppings = ["pepperoni", "sausage", "bacon", "extra cheese"];
function greetCustomer() {
  let message = `Welcome to James' Pizza Palace! The toppings we have available are: `;
  for (let topping of pizzaToppings) {
    message += `${topping}, `;
      };
  console.log(message);
};
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`${size} ${crust} crust pizza with ${toppings} coming up!`);
  return size + crust + toppings;
};
getPizzaOrder();

function preparePizza(size["small", "medium", "large"], crust["thick", "thin"], toppings["pepperoni", "sausage", "bacon", "extra cheese"]){
console.log(`...Cooking pizza...`);
return size[0] crust[1] toppings[0, 1, 2];
;}
preparePizza();

function servePizza(pizza) {
  console.log(`Order up! Here's your ${size} ${crust} crust pizza with ${toppings}. Enjoy!`)
  return pizza
};

servePizza(preparePizza(getPizzaOrder(pizza)));

