async function getRandomCard() {
  try {
    const response = await fetch(`https://api.tcgdex.net/v2/en/cards`);
    const data = await response.json();
    console.log("done");
    return data;
  } catch (error) {
    console.log(error);
  }
  data.forEach((card) => console.log(card.id));
}
getRandomCard();
