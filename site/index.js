const animalApiUrl = "https://zoo-animal-api.herokuapp.com/animals/rand/1"
const animalHook = document.querySelector(".animals")

function lowerCaseFirstLetter(string){
    return string.charAt(0).toLowerCase() + string.slice(1)
}



fetch(animalApiUrl)
.then(response => response.json())
.then(animals =>animals.forEach(animal =>{
    const li = document.createElement("li")
    li.classList.add("animal-cards")
    li.innerHTML =`
        <div class = "animal-card">
        <img src = "${animal.image_link}" alt = ${animal.name}>
        <div>
         <p class = "animal-name">${animal.name} <span> (${animal.latin_name}) </span} </p>
         <p> Lives in ${lowerCaseFirstLetter(animal.habitat)} </p>
         <p> Eats: ${animal.diet} </p>
         <p> Where in the world can this animal be found: ${animal.geo_range} </p>
        </div>
        </div> 
    `
    animalHook.append(li)
}))
