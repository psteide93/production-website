
const animalHook = document.querySelector('.animals')
const bigCard = document.querySelector('.big-card')
const main = document.querySelector('main')
const hamburger = document.querySelector('.hamburger')

fetch(getAnimalApiUrlNumber(1))
  .then(response => response.json())
  .then(bigAnimals => bigAnimals.forEach(bigAnimal => {
    bigCard.innerHTML = addBigCardToPage(bigAnimal)
  })).catch(redirect)

fetch(getAnimalApiUrlNumber(3))
  .then(response => response.json())
  .then(animals => animals.forEach(animal => {
    const li = document.createElement('li')
    li.classList.add('animal-cards')
    li.innerHTML = addMultiCardsToPage(animal)
    animalHook.append(li)
  })).catch(redirect)

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('nav')
  hamburger.classList.toggle('active')
  nav.classList.toggle('active')
})

function lowerCaseFirstLetter (string) {
  return string.charAt(0).toLowerCase() + string.slice(1)
}

function getAnimalApiUrlNumber (number) {
  return `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`
}

function addBigCardToPage (bigAnimal) {
  return `
     <h3>${bigAnimal.name}</h3> 
     <p><span> (${bigAnimal.latin_name}) </span} </p>
     <div class = "card-body">
     <img src = "${bigAnimal.image_link}" alt = ${bigAnimal.name}>
     <div class = "card-text">
      <p> Lives in ${bigAnimal.habitat} </p>
      <p> Eats: ${bigAnimal.diet} </p>
      <p> Where in the world can this animal be found: ${bigAnimal.geo_range} </p>
     </div>
     `
}

function addMultiCardsToPage (animal) {
  return `
    <div class = "animal-card">
    <h3>${animal.name}</h3> 
    <p><span> (${animal.latin_name}) </span} </p>
    <div class = "card-body">
    <img src = "${animal.image_link}" alt = ${animal.name}>
    <div class = "card-text">
     <p> Lives in ${lowerCaseFirstLetter(animal.habitat)} </p>
     <p> Eats: ${animal.diet} </p>
     <p> Where in the world can this animal be found: ${animal.geo_range} </p>
    </div>
    </div> 
`
}

function addErrorMessageToPage () {
  const p = document.createElement('p')
  p.textContent = 'yikes'
  main.append(p)
}

function parseJson (response) {
  return response => response.json()
}

function redirect () {
  window.location.href = './404.html'
}
