const operatorList = document.getElementById("operatorList");

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

console.log("api connected");
