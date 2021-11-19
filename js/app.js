

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=cars")
    .then(response => response.json())
    .then(data => {
        const bgImageUrl = data.urls.regular;
        document.body.style.backgroundImage = `url(${bgImageUrl})`;
        document.getElementById("image-author").textContent = `By:${data.user.name}`

    })
    .catch(error=> console.log(error))


navigator.geolocation.getCurrentPosition(
    (position) => console.log(position.coords)
)

