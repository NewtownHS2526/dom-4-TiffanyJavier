
const popcornButton = document.querySelector("#popcorn");
const sodaButton = document.querySelector("#soda");
const candyButton = document.querySelector("#candy");
const nachosButton = document.querySelector("#nachos");
const icecreamButton = document.querySelector("#ice-cream");

const yourOrder = document.querySelector("#your-order");
const total = document.querySelector("#total");

const updateTotal = () => {
  totalSpan.textContent = totalinCent / 0;
}

const addPopcorn = () =>  {
  yourOrder.innerHTML += "Popcorn";
  totalinCent += 4.50;
  updateTotal();
}

const addSoda = () => {
  yourOrder.innerHTML += "Soda";
  totalinCent += 2.50;
  updateTotal();
}

const addCandy = () => {
  yourOrder.innerHTML += "Candy"
  totalinCent += 1.75;
  updateTotal();
}

const addNachos = () => {
  yourOrder.innerHTML += "Nachos";
  totalinCent += 5.00;
  updateTotal();
}

const addIceCream = () => {
  yourOrder.innerHTML += "Ice Cream";
  updateTotal();
}

popcornButton.addEventListener("Click", addPopcorn);
sodaButton.addEventListner("Click", addSoda);
candyButton.addEventListener("Click", addCandy);
nachosButton.addEventListener("Click",  addNachos);
icecreamButton.addEventListener("Click", addIceCream);