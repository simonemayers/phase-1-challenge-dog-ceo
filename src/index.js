console.log('%c HI', 'color: firebrick')

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const input = document.querySelector("#breed-dropdown")
const images = document.querySelector("#dog-image-container")
const list = document.querySelector("#dog-breeds")

fetch(imgUrl).then(resp => resp.json()).then(data => {
    data.message.forEach(img => {
        imgTag = document.createElement("img")
        imgTag.src = img
        images.appendChild(imgTag)
    })
})

fetch(breedUrl).then(resp => resp.json()).then(data => {
    Object.keys(data.message).forEach(breed => {
        const listItem = document.createElement("li")
        listItem.textContent = breed
        list.appendChild(listItem)
    })
})

document.querySelector("#dog-breeds").addEventListener("click", (e) => {
    e.target.style.color = "red"})





input.addEventListener("change", (e) => {

    document.querySelectorAll("#dog-breeds li").forEach(breed => {
        if(breed.innerText[0] !== input.value) {
            breed.style.display = "none"
        }else {
            breed.style.display = "block"
        }
        })
})
