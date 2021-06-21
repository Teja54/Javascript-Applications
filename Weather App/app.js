const form = document.querySelector("form");
const input = document.querySelector("form input");
const msg = document.querySelector(".msg");
const list = document.querySelector(".ajax-section .cities");

const apikey = `63cba50fc6bb767cc2fdaa790b4edade`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apikey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      // console.log(main, name, sys, weather);
      const icon =
        "http://openweathermap.org/img/wn/" + weather["0"].icon + "@2x.png";
      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 😩";
    });
  msg.textContent = "";
  form.reset();
  input.focus();
});
