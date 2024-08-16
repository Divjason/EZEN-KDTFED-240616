const button = document.querySelector("#tweetButton");

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += ` #david #sns #js`;

  const encodedText = encodeURIComponent(tweetText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});
