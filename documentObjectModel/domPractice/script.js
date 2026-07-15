// Qs. Create a button using javaScript with innertext and add in the body tag
let newBtn = document.createElement("button");
newBtn.innerText="Click Me!";

newBtn.style.color="red";
newBtn.style.backgroundColor="black";

document.querySelector("body").prepend(newBtn);