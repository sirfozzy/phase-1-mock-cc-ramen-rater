// write your code here
fetch("http://localhost:3000/ramens")
.then(resp => resp.json())
.then(data => {
    console.log(data)
    data.forEach(ramen => {
        renderImg(ramen)
        clickRamen(ramen)
    })
})


function renderImg(ramen) {
    const img = document.createElement("img")
    image.src = ramen.image
    image.className = "ramen-image"
    document.querySelector("#ramen-menu").append(image)
}

function clickRamen(ramen) {
    const ramenImage = document.querySelectorAll(".ramen-image")
    ramenImage.forEach(image => image.addEventListener)
    ("click", ramenDetail(ramen))
}

function ramenDetail(ramen) {
    const image = document.querySelector(".detail-image")
    const name = document.querySelector(".name")
    const resturant = document.querySelector(".restaurant")
    const rating = document.querySelector("#rating-display")
    const comment = docoment.querySelector
    ("#comment-display")

    img.src = ramen.image
    name.textContent = ramen.name
    resturant.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    comment.textContent = ramen.comment
}