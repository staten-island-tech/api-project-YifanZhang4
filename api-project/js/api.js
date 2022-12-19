const apiURL = "https://api.quotable.io/random";

async function getRandomQuote(apiURL) {
  try {
    const response = await fetch(apiURL);
    const data = await response.json(); //makes data into usable json object
    document.getElementById("randomquote").textContent = data.content;
    console.log(data.content);
  } catch (error) {
    console.log(error);
  }
}
getRandomQuote(apiURL);
