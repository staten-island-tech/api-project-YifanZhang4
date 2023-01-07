import "../styles/style.css";
import "./api";



const displayOperators = (operatorlist) => {
  const htmlString = operatorlist
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
