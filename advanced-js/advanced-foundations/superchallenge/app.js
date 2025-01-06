import { getStockData } from "./fakeStockAPI.js";

setInterval(() => {
  const stockData = getStockData();
  renderStockTicker(stockData);
}, 1500);

let previousPrice = null;

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");

  const { name, sym, price, time } = stockData;

  const priceDirectionIcon =
    price > previousPrice
      ? "green.svg"
      : price < previousPrice
        ? "red.svg"
        : "grey.svg";

  const priceIconElement = document.createElement("img");
  priceIconElement.src = `svg/${priceDirectionIcon}`; // priceDirectionIcon;
  priceIconElement.alt = "Price direction icon";
  stockDisplayPrice.appendChild(priceIconElement);

  stockDisplayName.textContent = name;
  stockDisplaySymbol.textContent = sym;
  stockDisplayPrice.textContent = price;
  stockDisplayTime.textContent = time;
}
