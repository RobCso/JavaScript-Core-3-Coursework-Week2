const url = "https://dog.ceo/api/breeds/image/random";
const imageLink = document.getElementById("image")
const buttonLink = document.getElementById("button")

const fetchImage = () => {fetch(url).then(function(response){
    return response.text();
}).then(function(image) {
    //console.log(image)
    var myObj = JSON.parse(image);
    imageLink.src = myObj.message;    
}).catch((error) => {
    console.error("Error:", error)
})
}

fetchImage()
buttonLink.addEventListener("click",()=>{
    fetchImage()
})