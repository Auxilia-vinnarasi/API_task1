async function get_random_dog_image() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const dogData = await response.json();
        document.getElementById("image").src = dogData.message

    } catch (err) {
        console.log(err);

    }

}
