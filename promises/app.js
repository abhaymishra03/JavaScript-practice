// // Prommise 1 

const p1 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("Hello Abhay !");
    }, 3000);
});

p1.then((msg)=>{
    console.log(msg);
    
});

// promise 2

const p2 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        reject("Server Error");
    }, 3000);
});

p2.catch((msg)=>{
    console.log(msg);
    
});

// promise 3

const p3 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        console.log("Downloading file ....");
        resolve();
    }, 3000);
})
p3.then(() => {
    console.log("Download Complete");
});

// promise 4

// takeOrder(()=>{
//     preparePizza(()=>{
//         bakePizza(()=>{
//             deliverPizza(()=>{

function takeOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Order Received....");
            
            resolve();
        }, 3000);
    });

}
function preparePizza(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Pizza is being prepared....");
            
            resolve();
        }, 3000);
    });
}
function bakePizza(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Pizza baked....");
            
            resolve();
        }, 3000);
        
    });
    
}
function deliverPizza(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Pizza Delivered....");
            
            resolve();
        }, 3000);
    });
}

takeOrder().then(preparePizza).then(bakePizza).then(deliverPizza).then(()=>{
    console.log("All Done!");
    
});

// promise 5
// Login
// ↓
// Fetch Profile
// ↓
// Show Dashboard

function login(){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Login Sucessful !");

            resolve();
            
        }, 3000);
    });
}
function fetchProfile(){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Profile fetched  !");
            resolve();
            
        }, 3000);
    });
}
function showDashboard(){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Show Dashboard !");
            resolve();
            
        }, 3000);
    });
}


login().then(fetchProfile).then(showDashboard);