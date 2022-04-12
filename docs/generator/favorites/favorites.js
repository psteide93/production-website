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
    const li = document.createElement("li");
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
  sendEmail(getFormData(event));
});

function getFormData(event) {
  const formData = new FormData(event.target);
  const firstName = upperCaseFirstLetter(formData.get("first-name"));
  const lastName = upperCaseFirstLetter(formData.get("last-name"));
  const eMail = formData.get("e-mail");
  return{
   firstName,
   lastName,
   eMail 
  };
}

function sendEmail(user) {
  const {firstName, lastName, eMail} = user 
  document.location = `mailto:${eMail}?
  subject="List of Favorite Animals from ${firstName} ${lastName}"
  `;
}

function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
