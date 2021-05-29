const RANDOM_QUOTE_URL = "https://api.quotable.io/random";

// Api taken from https://github.com/lukePeavey/quotable#get-random-quote

const btn = document.querySelector(".generate");
const twitterShare = document.getElementById("twitter-share");
const quoteOutput = document.getElementById("quote");
const authorOutput = document.getElementById("author");
const copyBtn = document.querySelector(".copy");
const alert = document.querySelector(".alertBox");

async function getQuote() {
  const response = await fetch(RANDOM_QUOTE_URL);
  const data = await response.json();

  const quoteText = data.content;
  const authorName = data.author;

  quoteOutput.textContent = quoteText;
  authorOutput.textContent = `- ${authorName}`;

  const url = "https://twitter.com/intent/tweet";
  var tweet =
    url + "?text=" + encodeURIComponent(`${quoteText}  - ${authorName}`);
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
