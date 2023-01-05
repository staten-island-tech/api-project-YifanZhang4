import "../styles/style.css";
import "./api";
import { DOMSelectors } from "./dom";

DOMSelectors.search.addEventListener("keyup", (event) => {
  event.preventDefault();
  const value = event.target;
  const string = value.toString();
  const query = string.toLowerCase();
  let name = document.querySelectorAll(".op-name");
  let card = document.querySelectorAll(".operatorCard");
  let nameString = name.toString();
  if (nameString.includes(query)) {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
});

DOMSelectors.searchClear.addEventListener("click", () => {});

const displayOperators = (operators) => {
  const htmlString = operators
    .map((operator) => {
      return `
            <li class="operatorCard">
                <h2 class="op-name">${operator.name}</h2>
                <p>Class: ${operator.class}</p>
                <img src="${operator.art.Base}" class="img"></img>
            </li>
        `;
    })
    .join("");
  operatorList.innerHTML = htmlString;
};

export { displayOperators };
