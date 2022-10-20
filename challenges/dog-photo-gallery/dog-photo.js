const url = "https://dog.ceo/api/breeds/image/random";
const imageLink = document.getElementById("image")
const buttonLink = document.getElementById("button")
fetch(url).then(function(response){
    return response.text();
}).then(function(image) {
    console.log(image)
    var myObj = JSON.parse(image);
    imageLink.src = myObj.message;
    buttonLink.addEventListener("click",)
})