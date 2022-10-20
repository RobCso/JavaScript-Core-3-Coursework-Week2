const url = "https://xkcd.now.sh/?comic=latest";

const imageLink = document.createElement("img")
document.body.prepend(imageLink)

const fetchImage = () => {
    fetch(url).then(function
        (response){
            //console.log(response)
            return response.text()
        }).then(function(data) {
            console.log(data)
            var myObj = JSON.parse(data)
            console.log(myObj)
            imageLink.src = myObj.img
        }).catch((error) => {
            console.error("Error:", error)
        })
}

fetchImage()