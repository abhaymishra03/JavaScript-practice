let list = document.querySelector("#list");
let inpt = document.querySelector("#fruit");

inpt.addEventListener("change",() => {

    let enterFood = inpt.value;

    let li = document.createElement("li");

    li.textContent=enterFood;

    list.appendChild(li);

}
)