const ul = document.querySelector(".favorite-list");
const favoriteAnimals = JSON.parse(localStorage.getItem("favoriteAnimals"));
const hamburger = document.querySelector(".hamburger");
const form = document.querySelector("form");
const clearButton = document.querySelector("button");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

if (favoriteAnimals !== null) {
  const uniqueAnimals = favoriteAnimals.filter((animal, position) => {
    return favoriteAnimals.indexOf(animal) == position;
  });
  uniqueAnimals.forEach((animal) => {
    li = document.createElement("li");
    li.innerHTML = `
${animal}
`;
    ul.append(li);
  });
}

clearButton.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let firstName = upperCaseFirstLetter(
    document.querySelector("#first-name").value
  );
  let lastName = upperCaseFirstLetter(
    document.querySelector("#last-name").value
  );
  let email = document.querySelector("#e-mail").value;
  form.reset();
  sendEmail(firstName, lastName, email);
});

function sendEmail(firstName, lastName, email) {
  document.location = `mailto:${email}?
  subject="List of Favorite Animals from ${firstName} ${lastName}"
  `;
}

function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
