/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
 */

function selectItem(item) {
  let price = 0;

  switch (item) {
    case "coffee":
      price = 2;
      break;
    case "sandwiches":
      price = 5;
      break;
    case "salad":
      price = 4;
      break;
    case "lemon cake":
      price = 3;
      break;
    default:
      return `We don't sell ${item}`;
  }
  return `You have selected ${item}. That will $${price}`;
}

console.log(selectItem("tea"));
