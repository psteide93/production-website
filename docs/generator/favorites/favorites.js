const ul = document.querySelector("ul")
const animals = JSON.parse(localStorage.getItem("favoriteAnimals"))
console.log(animals)
animals.forEach(animal => {
li = document.createElement("li")
li.innerHTML=`
${animal}
`
ul.append(li) })