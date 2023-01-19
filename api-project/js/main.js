import "../styles/style.css";
import "./api";
import { DOMSelectors } from "./dom";
import { loadCharacters } from "./api";

// async function testW() {
//   let data = await loadCharacters();
//   console.log(data);
// }
// testW();

const buttons = {
  allops: async function () {
    try {
      const data = await loadCharacters();
      data.forEach((operator) =>
        this.createCard(operator.name, operator.tags, operator.art.Base)
      );
    } catch (err) {
      console.log("ERROR allops");
      document.getElementById("filter-response").textContent = "Error :(";
    }
  },
  vanguard: async function () {
    try {
      const data = await loadCharacters();
      data
        .filter((operators) => operators.tags.includes("Vanguard"))
        .forEach((vanguard) =>
          this.createCard(vanguard.name, vanguard.tags, vanguard.art.Base)
        );
    } catch (err) {
      console.log("ERROR VANGUARD");
      document.getElementById("filter-response").textContent = "Error :(";
    }
  },
  guard: async function () {
    try {
      const data = await loadCharacters();
      data
        .filter((operators) => operators.tags.includes("Guard"))
        .forEach((guard) =>
          this.createCard(guard.name, guard.tags, guard.art.Base)
        );
    } catch (err) {
      console.log("ERROR GUARD");
      document.getElementById("filter-response").textContent = "Error :(";
    }
  },
  defender: async function () {
    try {
      const data = await loadCharacters();
      data
        .filter((operators) => operators.tags.includes("Defender"))
        .forEach((defender) =>
          this.createCard(defender.name, defender.tags, defender.art.Base)
        );
    } catch (err) {
      console.log("ERROR DEFENDER");
      document.getElementById("filter-response").textContent = "Error :(";
    }
  },
  sniper: async function () {
    try {
      const data = await loadCharacters();
      data
        .filter((operators) => operators.tags.includes("Sniper"))
        .forEach((sniper) =>
          this.createCard(sniper.name, sniper.tags, sniper.art.Base)
        );
    } catch (err) {
      console.log("ERROR SNIPER");
      document.getElementById("filter-response").textContent = "Error :(";
    }
  },
  caster: async function () {
    try {
      const data = await loadCharacters();
      data
        .filter((operators) => operators.tags.includes("Caster"))
        .forEach((caster) =>
          this.createCard(caster.name, caster.tags, caster.art.Base)
        );
    } catch (err) {
      console.log("ERROR CASTER");
      document.getElementById("filter-response").textContent = "Error :(";
    }
  },
  medic: async function () {
    try {
      const data = await loadCharacters();
      data
        .filter((operators) => operators.tags.includes("Medic"))
        .forEach((medic) =>
          this.createCard(medic.name, medic.tags, medic.art.Base)
        );
    } catch (err) {
      console.log("ERROR MEDIC");
      document.getElementById("filter-response").textContent = "Error :(";
    }
  },
  supporter: async function () {
    try {
      const data = await loadCharacters();
      data
        .filter((operators) => operators.tags.includes("Supporter"))
        .forEach((supporter) =>
          this.createCard(supporter.name, supporter.tags, supporter.art.Base)
        );
    } catch (err) {
      console.log("ERROR SUPPORTER");
      document.getElementById("filter-response").textContent = "Error :(";
    }
  },
  specialist: async function () {
    try {
      const data = await loadCharacters();
      data
        .filter((operators) => operators.tags.includes("Specialist"))
        .forEach((specialist) =>
          this.createCard(specialist.name, specialist.tags, specialist.art.Base)
        );
    } catch (err) {
      console.log("ERROR SPECIALIST");
      document.getElementById("filter-response").textContent = "Error :(";
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

onLoad();

async function onLoad() {
  buttons.takeaway();
  buttons.allops();
}

DOMSelectors.all.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("all click");
  buttons.takeaway();
  buttons.allops();
});

DOMSelectors.vanguard.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("vanguard click");
  buttons.takeaway();
  buttons.vanguard();
});

DOMSelectors.guard.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("guard click");
  buttons.takeaway();
  buttons.guard();
});

DOMSelectors.defender.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("defender click");
  buttons.takeaway();
  buttons.defender();
});

DOMSelectors.sniper.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("sniper click");
  buttons.takeaway();
  buttons.sniper();
});

DOMSelectors.caster.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("caster click");
  buttons.takeaway();
  buttons.caster();
});

DOMSelectors.medic.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("medic click");
  buttons.takeaway();
  buttons.medic();
});

DOMSelectors.supporter.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("supporter click");
  buttons.takeaway();
  buttons.supporter();
});

DOMSelectors.specialist.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("specialist click");
  buttons.takeaway();
  buttons.specialist();
});
