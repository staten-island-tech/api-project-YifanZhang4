import "../styles/style.css";
import "./api";
import { DOMSelectors } from "./dom";

search.addEventListener("keyup", (event) => {
  const searchString = event.target.value;
  console.log(searchString);
  const filteredOperators = operators.filter((operator) => {
    return operator.name.toLowerCase().inclues(searchString);
  });
  displayOperators(filteredOperators);
});

const displayOperators = (operators) => {
    const htmlString = operators
        .map((operator) => {
            return `
            <li class="operatorCard">
                <h2>${operator.name}</h2>
                <p>Class: ${operator.class}</p>
                <img src="${operator.art.Base}" class="img"></img>
            </li>
        `;
        })
        .join('');
    operatorList.innerHTML = htmlString;
  };

  export {displayOperators};