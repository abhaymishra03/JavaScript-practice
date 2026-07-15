let password = document.querySelector("#pass");
let btn = document.querySelector("#btn");


btn.addEventListener("click",()=>{
    if(btn.textContent === "Show"){
        btn.textContent ="Hide";
        password.type="text";
        
    }
    else{
        password.type="password";
        btn.textContent ="Show";}

})