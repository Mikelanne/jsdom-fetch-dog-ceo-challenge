console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

document.addEventListener('DOMContentLoaded', () => {

    const dropdown = document.getElementById("breed-dropdown")

    function fetchDog() {
        // fetch the url
        fetch(imgUrl)
        // parse the data into json
        .then(resp => resp.json())
        // use a forEach to get each image
        // add each image to the DOM
        .then(data => addDogToDom(data));
    }

    fetchDog()

    function addDogToDom(data) {
        const dogView = document.getElementById("dog-image-container")
        const dogArray = data["message"]
        dogArray.forEach(dog => {
            const img = document.createElement("img")
            img.src = dog
            dogView.appendChild(img)
        })
    }

    function fetchBreed() {
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => addBreeds(data));
    }

    fetchBreed()

    // dropdown.addEventListener('change', addBreeds)

    function addBreeds(data) {
        const breeds = data["message"]
        const dogBreedList = document.getElementById("dog-breeds")
        for (const key in breeds) {
            const li = document.createElement("li")
            li.id = "breed"
            li.innerText = key
            dogBreedList.appendChild(li)
        }
            // const li = document.getElementById("breed")
            // li.addEventListener('click', () => {
            //     debugger
            //     console.log(li.innerText)
            //     li.innerText.fontcolor('pink')
            // });
    }
            // grab the input from the drop down
            // find the key in the breed object that starts with that input
            // display that result
            // use a for ... in to iterate over objects.
            //if (key.charAt(0) === dropdown.value)


})

