const menu = [
  { name: "Cheese", price: 9 },
  { name: "Pepperoni", price: 12 },
  { name: "Sausage", price: 12 },
  { name: "Mushroom", price: 8 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

const addNewPizza = (pizzaObj) => {
  menu.push(pizzaObj);
};

const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizzaName: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderId) => {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
};

addNewPizza({ name: "Veggie", price: 10 });
addNewPizza({ name: "Hawaiian", price: 11 });

placeOrder("Cheese");
completeOrder("1");
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
