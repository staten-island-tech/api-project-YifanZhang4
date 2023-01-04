import "../styles/style.css";
import "./api";
import { DOMSelectors } from "./dom";

DOMSelectors.searchEnter.addEventListener("click", function (event) {
  event.preventDefault();
  const input = DOMSelectors.search.value;
  const filter = input.value.toUpperCase();
  for (i = 0; i < card.length; i++) {
    a = card[i].getElementsByTagName("li")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
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
    .join("");
  operatorList.innerHTML = htmlString;
};

export { displayOperators };
