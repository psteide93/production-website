const animalApiUrl = "https://zoo-animal-api.herokuapp.com/animals/rand/1"
const animalHook = document.querySelector(".animals")

fetch(animalApiUrl)
.then(response => response.json())
.then(animals =>animals.forEach(animal =>{
    const li = document.createElement("li")
    li.classList.add("animal-card")
    li.innerHTML =`
        <div>
        <img src = "${animal.image_link}" alt = ${animal.name}>
        <div>
         <p>${animal.name} <span> (${animal.latin_name}) </span} </p>
         <p> ${animal.habitat} </p>
         <p> ${animal.diet} </p>
         <p> This animal can be found: ${animal.geo_range} </p>
        </div>
        </div> 
    `
    animalHook.append(li)
}))
