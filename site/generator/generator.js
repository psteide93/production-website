const button = document.querySelector("button")
const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)
const animalHook = document.querySelector(".animals")


function addAnimalsToPage(url) {
fetch(url)
    .then(response => response.json())
    .then(animals => animals.forEach(animal => {
        const li = document.createElement("li")
        li.classList.add("animal-cards")
        li.innerHTML = addMultiCardsToPage(animal)
        animalHook.append(li)
    }))
}

function addMultiCardsToPage(animal) {
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
        <a href = "./learn-more/learn-more.html?animal=${animal.name}">Learn More!</a>
        </div> 
    `
}

function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1)
}

function getAnimalApiUrlNumber(number) {
    return `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`
}

const userInfo = {
    name:queryParams.get("first-name"),
    email: queryParams.get("e-mail"),
    numberofAnimals: queryParams.get("number-of-cards")

}

addAnimalsToPage(getAnimalApiUrlNumber(userInfo.numberofAnimals))
