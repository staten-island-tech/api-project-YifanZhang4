import "../styles/style.css";
import "./api";
import { DOMSelectors } from "./dom";

DOMSelectors.search.addEventListener("keyup", (e) => {
  e.preventDefault();
  const searchString = e.target.value;
  console.log(searchString);
  const filteredOperators = operators.filter((operator) => {
    return (
      operator.name.toLowerCase().includes(searchString) ||
      operator.class.toLowerCase().includes(searchString)
    );
  });
  displayCharacters(filteredOperators);
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
