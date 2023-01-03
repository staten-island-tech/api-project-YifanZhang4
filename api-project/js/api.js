const operatorList = document.getElementById("operatorList");
let operators = [];

const loadCharacters = async () => {
  try {
    const res = await fetch("https://rhodesapi.cyclic.app/api/operator");
    const operators = await res.json();
    displayOperators(operators);
    console.log(operators);
  } catch (err) {
    console.error(err);
  }
};

import { displayOperators } from "./main";

loadCharacters();
