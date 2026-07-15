let btn1 = document.querySelector("#btn");

let currMode = "dark";


btn1.addEventListener("click",()=>{

  if(currMode === "dark"){
currMode = "light" ;

document.body.style.backgroundColor="white";

}
else {
    currMode = "dark";
    
    document.body.style.backgroundColor="black";

}


})

