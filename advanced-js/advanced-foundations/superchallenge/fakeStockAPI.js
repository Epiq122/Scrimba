export function getStockData() {
  return {
    name: "QtechAI",
    sym: "QTA",
    /* return a random number between 0 and 3 to two decimal places */
    price: (Math.random() * 3).toFixed(2),
    /* return a timestamp in this format: hh/mm/ss */
    time: new Date().toLocaleTimeString(),
  };
}
