const ul = document.querySelector(".animals");
const bigCard = document.querySelector(".big-card");
const main = document.querySelector("main");
const hamburger = document.querySelector(".hamburger");

fetch(getAnimalApiUrlNumber(1))
  .then(parseJSON)
  .then(addBigCardToPage)
  .catch(redirect);

fetch(getAnimalApiUrlNumber(3))
  .then(parseJSON)
  .then(addAnimalCardsToPage)
  .catch(redirect);

function addAnimalCardsToPage(animals) {
  animals.forEach((animal) => {
    const li = document.createElement("li");
    const { name, latin_name, habitat, diet, image_link, geo_range } = animal;
    li.classList.add("animal-cards");
    li.innerHTML = `
          <div class = "animal-card">
            <h3>${name}</h3>
            <p><span> (${latin_name}) </span} </p>
            <div class = "card-body">
              <img src = "${image_link}" alt = ${name}>
              <div class = "card-text">
                <p> Lives in ${lowerCaseFirstLetter(habitat)} </p>
                <p> Eats: ${diet} </p>
                <p> Where in the world can this animal be found: ${geo_range}</p>
              </div>
            </div>
          </div>
      `;
    ul.append(li);
  });
}

hamburger.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function getAnimalApiUrlNumber(number) {
  return `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`;
}

function addBigCardToPage(bigAnimals) {
  bigAnimals.forEach((bigAnimal) => {
    const { name, image_link, habitat, diet, geo_range, latin_name } =
      bigAnimal;
    bigCard.innerHTML = `
     <h3>${name}</h3> 
     <p><span> (${latin_name}) </span} </p>
     <div class = "card-body">
      <img src = "${image_link}" alt = ${name}>
      <div class = "card-text">
          <p> Lives in ${habitat} </p>
          <p> Eats: ${diet} </p>
          <p> Where in the world can this animal be found: ${geo_range} </p>
        </div>
      </div>
     </div>
     `;
  });
}

function parseJSON(response) {
  return response.json();
}

function redirect() {
  window.location.href = "./site/404.html";
}
