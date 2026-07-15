let inputText =document.querySelector("textarea");
let char = document.querySelector("p");



inputText.addEventListener("input", function () {

    let characters = inputText.value.length;
    char.textContent = "Characters : "+ characters;
});
