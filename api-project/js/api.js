let operatorlist = [];

const loadCharacters = async () => {
  try {
    const res = await fetch(`https://rhodesapi.cyclic.app/api/operator`);
    if (res.status < 200 || res.stats > 299) {
      throw Error(res.status);
    } else {
      const operatorlist = await res.json();
      displayOperators(operatorlist);
      console.log(operatorlist);
      return operatorlist;
    }
  } catch (err) {
    console.log("ERROR");
    document.getElementById("api-response").textContent =
      "Sorry, something went wrong :(";
  }
};

import { displayOperators } from "./main";
loadCharacters();

import { DOMSelectors } from "./dom";
DOMSelectors.searchEnter.addEventListener("click", function(event)  {
  event.preventDefault();
  const searchString = event.target.value.toLowerCase();
  console.log(searchString);
  remove();
  operatorlist.filter((operator) => 
      operator.name.toLowerCase().includes(searchString) ||
      operator.class.toLowerCase().includes(searchString)).forEach((filteredOperators) =>
  console.log(filteredOperators.class));
});

function remove() {
  const cards = document.querySelectorAll(".operatorCard");
  cards.forEach((card) => {
    card.remove();
  });
};

console.log("api connected");
