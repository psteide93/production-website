const ul = document.querySelector(".favorite-list");
const animals = JSON.parse(localStorage.getItem("favoriteAnimals"));
const hamburger = document.querySelector(".hamburger");
const form = document.querySelector("form");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

animals.forEach((animal) => {
  li = document.createElement("li");
  li.innerHTML = `
${animal}
`;
  ul.append(li);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(ul.textContent);
  let firstName = document.querySelector("#first-name").value;
  firstName = upperCaseFirstLetter(firstName)
  let lastName = document.querySelector("#last-name").value;
  lastName = upperCaseFirstLetter(lastName)
  let email = document.querySelector("#e-mail").value;
  form.reset();
  console.log(firstName, lastName, email);
  sendEmail(firstName, lastName, email, ul);
});

function sendEmail(firstName, lastName, email) {
  document.location = `mailto:${email}?
  subject="List of Favorite Animals from ${firstName} ${lastName}"
  `;
}

function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}