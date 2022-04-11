const selector = document.querySelector(".selector");
const ul = document.querySelector(".animals");
const favorites = document.querySelector(".favorites");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

selector.addEventListener("submit", (event) => {
  event.preventDefault();
  const numberOfCards = selector.querySelector("#number-of-cards").value;
  fetch(getAnimalApiUrlNumber(numberOfCards))
    .then(parseJSON)
    .then((animals) =>
      animals.forEach((animal) => {
        fetch(getWikiUrl(animal.latin_name))
          .then(parseJSON)
          .then((wikiInfo) => {
            createAnimalCard(animal, wikiInfo);
            createOptionList(animal);
          });
      })
    );
  selector.classList.add("hidden");
  favorites.classList.remove("hidden");
});

favorites.addEventListener("submit", (event) => {
  event.preventDefault();
  saveAnimalsFromSelector(event);
});

function saveAnimalsFromSelector(event) {
  const formData = new FormData(event.target);
  const selectedAnimals = formData.getAll("favorite-animal");
  console.log(selectedAnimals)
  const favoriteAnimalList = []
  favoriteAnimalList.concat(selectedAnimals)
  console.log(favoriteAnimalList)
  const animalJSON = JSON.stringify({favoriteAnimalList})
  localStorage.setItem("favoriteAnimals", animalJSON);

}

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function getAnimalApiUrlNumber(number) {
  return `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`;
}

function getWikiUrl(animalName) {
  return `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limt=1&search=${animalName}`;
}

function parseJSON(httpResponse) {
  return httpResponse.json();
}

function createAnimalCard(animal, wikiInfo) {
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
       <a 
        target = "blank" 
        class = "learn-more" 
        href = ${wikiInfo[3][0]} 
       >Learn More!</a>
       </div>
  `;
  ul.append(li);
}

function createOptionList(item) {
  const listOptions = document.querySelector("#favorite-animal");
  const option = document.createElement("option");
  const { name } = item;
  option.textContent = name;
  option.value = name;
  listOptions.append(option);
}
