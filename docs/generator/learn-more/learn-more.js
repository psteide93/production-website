const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)
const url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&limt=1&search=${queryParams.get("animal")}`
const iframe = document.querySelector("iframe")

fetch(url)
.then(response => response.json())
.then(parsedResponse => {
    iframe.src = parsedResponse[3]

})