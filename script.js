const toggle = document.querySelector("#toggle");
let toggleLabel = document.querySelector(".toggle--dark");
let body = document.querySelector(".body__dark");
let mainCommandsCard = document.querySelectorAll(".main__commands--card");
let cardTitle = document.querySelectorAll(".card__title");

toggle.addEventListener("click", function (e) {

  body.classList.toggle("body__light");
  toggleLabel.classList.toggle("toggle--light");

  //change color in light mode for all divs with class "main__followers--media"
  for (let i = 0; i < mainCommandsCard.length; i++) {
    mainCommandsCard[i].classList.toggle("main__commands--card-L");
  }

  //change color in light mode for all divs with class "main__likes--card"
  for (let i = 0; i < cardTitle.length; i++) {
    cardTitle[i].classList.toggle("card__title-L");
  }
});

const flagsElement = document.getElementById("header__flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});
