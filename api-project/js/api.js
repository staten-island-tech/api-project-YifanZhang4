const operatorList = document.getElementById("operatorList");
let operators = [];

const loadCharacters = async () => {
  try {
    const res = await fetch(`https://rhodesapi.cyclic.app/api/operator`);
    if (res.status < 200 || res.stats > 299) {
      throw Error(res.status);
    } else {
      const operators = await res.json();
      displayOperators(operators);
      console.log(operators);
    }
  } catch (err) {
    console.log("ERROR");
    document.getElementById("api-response").textContent =
      "Sorry, something went wrong :(";
  }
};

import { displayOperators } from "./main";

loadCharacters();

console.log("api connected");
