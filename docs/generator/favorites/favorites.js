const ul = document.querySelector("ul")
const animals = JSON.parse(localStorage.getItem("favoriteAnimals"))
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", ()=> {
  const nav = document.querySelector("nav")
  hamburger.classList.toggle("active")
  nav.classList.toggle("active")
})





console.log(animals)
animals.forEach(animal => {
li = document.createElement("li")
li.innerHTML=`
${animal}
`
ul.append(li) })