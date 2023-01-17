import "../styles/style.css";
import "./api";
import { DOMSelectors } from "./dom";
import { loadCharacters } from "./api";

DOMSelectors.vanguard.addEventListener("click", async function (e) {
  e.preventDefault();
  buttons.takeaway();
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
        .filter((operators) => operators.tags.includes("Vanguard"))
        .forEach((vanguard) =>
          this.createCard(vanguard.name, vanguard.tags, vanguard.art.Base)
        );
    } catch (err) {
      console.log("ERROR");
      document.getElementById("filter-response").textContent =
        "AHGFVKBSDFGAKEF :(";
    }
  },
  createCard: function (name, tags, art) {
    DOMSelectors.list.insertAdjacentHTML(
      "beforeend",
      `
      <li class="operatorCard">
          <h2 class="op-name" >${name}</h2>
          <p>Tags: ${tags}</p>
          <img src="${art}" class="img"></img>
      </li>
  `
    );
  },
  takeaway: function () {
    const cards = document.querySelectorAll(".operatorCard");
    cards.forEach((card) => {
      card.remove();
    });
  },
};
