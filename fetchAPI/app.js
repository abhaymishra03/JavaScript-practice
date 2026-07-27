let URL = "https://dogapi.dog/api/v1/facts?number=2";
let btn = document.querySelector("#btn");
let parah = document.querySelector("#fact");

btn.addEventListener("click",dogFact);
async function dogFact() {
    const response = await fetch(URL);
    const data = await response.json();
    parah.innerText = data.facts[0];
}
