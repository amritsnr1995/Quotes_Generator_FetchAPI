const quoteText = document.getElementById("quote__text"),
  quoteTags = document.getElementById("quote__tags"),
  quoteAuthor = document.getElementById("quote__author");
quoteButton = document.getElementById("quote__button");

// function getRandomQuote() {
//     return fetch('https://api.quotable.io/random')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data.content,data.author);
//       });
//   }

function randomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteTags.textContent = data.tags;
      quoteAuthor.textContent = `--${data.author}`;
    });
}

randomQuote();
quoteButton.addEventListener('click',() => {
    randomQuote();
});
// setInterval(randomQuote,4000);