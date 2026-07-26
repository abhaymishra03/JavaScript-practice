let btn = document.querySelector("#btn");
let counter = document.querySelector("#count");

btn.addEventListener("mouseout",()=>{
    let cnt = Number(counter.innerText);
    cnt++;
    counter.innerText=cnt;
    


})