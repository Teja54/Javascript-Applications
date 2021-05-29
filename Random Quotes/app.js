const quotes = [
  {
    quote: "The best error message is the one that never shows up.",
    author: " - Thomas Fuchs",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: " – Martin Fowler",
  },
  {
    quote:
      "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
    author: " - Andrew Hunt",
  },
  {
    quote: "Testing leads to failure, and failure leads to understanding.",
    author: "- Burt Rutan",
  },
  {
    quote:
      "The most damaging phrase in the language is.. it's always been done this way.",
    author: "- Grace Hopper",
  },
  {
    quote:
      "Don't write better error messages, write code that doesn't need them.",
    author: "- Jason C. McDonald",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: " – John Johnson",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: " – Oscar Wilde",
  },
  {
    quote: "In order to be irreplaceable, one must always be different",
    author: "– Coco Chanel",
  },
  {
    quote: "Java is to JavaScript what car is to Carpet.",
    author: " – Chris Heilmann",
  },
  {
    quote: "Knowledge is power.",
    author: " – Francis Bacon",
  },
  {
    quote:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "– Dan Salomon",
  },
  {
    quote:
      "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
    author: "– Antoine de Saint-Exupery",
  },
];

const btn = document.querySelector(".generate");
const twitterShare = document.getElementById("twitter-share");
const quoteOutput = document.getElementById("quote");
const authorOutput = document.getElementById("author");
const copyBtn = document.querySelector(".copy");
const alert = document.querySelector(".alertBox");

function getQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[random].quote;
  const authorName = quotes[random].author;

  quoteOutput.textContent = quoteText;
  authorOutput.textContent = authorName;

  const url = "https://twitter.com/intent/tweet";
  var tweet = url + "?text=" + encodeURIComponent(quoteText + authorName);
  twitterShare.href = tweet;
}
function copyQuote() {
  copyBtn.src =
    "https://res.cloudinary.com/teja54/image/upload/v1620965160/check_black_24dp_vzqmqv.svg";
  setTimeout(function () {
    copyBtn.src =
      "https://res.cloudinary.com/teja54/image/upload/v1620914296/content_copy_black_24dp_kobzlu.svg";
  }, 1500);

  var r = document.createRange();
  r.selectNode(document.getElementById("quote"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert.classList.add("active");

  setTimeout(function () {
    alert.classList.remove("active");
  }, 1500);
}

btn.addEventListener("click", getQuote);
copyBtn.addEventListener("click", copyQuote);
