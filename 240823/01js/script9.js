const quoteURL = "http://dummyjson.com/quotes";

fetch(quoteURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerHTML = `- ${data.quotes[random].author} -`;
  })
  .catch((err) => console.log(err));
