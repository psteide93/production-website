// const wikiUrlTemplate = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${animal}`
const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)



// function addAnimalToUrl(queryParams.get("animal")){
//     return `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${queryParams.get("animal")}`
// }

fetch( `https://en.wikipedia.org/w/api.php?action=opensearch&limt=1&search=${queryParams.get("animal")}`).then(response => console.log(response))