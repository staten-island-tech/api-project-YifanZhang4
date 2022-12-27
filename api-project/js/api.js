const operatorList = document.getElementById("operatorList");
let operators = [];

const loadCharacters = async () => {
  try {
      const res = await fetch('https://rhodesapi.cyclic.app/api/operator');
      const RIOperators = await res.json();
      displayOperators(RIOperators);
      console.log(RIOperators);
  } catch (err) {
      console.error(err);
  }
};

import { displayOperators } from "./main";

loadCharacters();