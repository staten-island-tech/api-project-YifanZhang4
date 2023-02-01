import { DOMSelectors } from "./dom";

const loadCharacters = async () => {
  try {
    const res = await fetch(`https://rhodesapi.cyclic.app/api/operator`);
    if (res.status < 200 || res.status > 299) {
      throw Error(res.status);
    } else {
      const operatorlist = await res.json();
      //   operatorlist.forEach((operator) => {
      //     DOMSelectors.list.insertAdjacentHTML(
      //       "beforeend",
      //       `
      //     <li class="operatorCard">
      //         <h2 class="op-name" >${operator.name}</h2>
      //         <p>Tags: ${operator.tags}</p>
      //         <img src="${operator.art.Base}" class="img"></img>
      //     </li>
      // `
      //     );
      //   });
      return operatorlist;
    }
  } catch (err) {
    console.log("ERROR");
    document.getElementById("api-response").textContent = "oopsie woopsie :(";
  }
};

// loadCharacters();
export { loadCharacters };
console.log("api connected");
