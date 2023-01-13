import "../styles/style.css";
import "./api";
import { DOMSelectors } from "./dom";
import { loadCharacters } from "./api";

DOMSelectors.vanguard.addEventListener("click", async function (e) {
  e.preventDefault();
  buttons.remove();
  buttons.vanguards();
});
// async function testW() {
//   let data = await loadCharacters();
//   console.log(data);
// }
// testW();
const buttons = {
  vanguards: async function () {
    try {
      const data = await loadCharacters();
      data
        .filter((operators) => operators.class === "Vanguard")
        .forEach((vanguard) =>
          this.createCard(vanguard.name, vanguard.class, vanguard.art.Base)
        );
      console.log(data);
    } catch (err) {
      console.log("ERROR");
      document.getElementById("filter-response").textContent =
        "AHGFVKBSDFGAKEF :(";
    }
  },
  createCard: function () {
    DOMSelectors.list.insertAdjacentHTML(
      "beforeend",
      `
    <li class="operatorCard">
        <h2 class="op-name" >${operator.name}</h2>
        <p>Class: ${operator.class}</p>
        <img src="${operator.art.Base}" class="img"></img>
    </li>
`
    );
  },
  remove: function () {
    const cards = document.querySelectorAll(".operatorCard");
    cards.forEach((card) => {
      card.remove();
    });
  },
};
