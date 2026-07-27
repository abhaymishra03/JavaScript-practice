// // Async Await 1 
//  function paymentStatus(){
//     return new Promise((resolve,reject)=>{
//         let val = Math.random();
//         if(val > 0.5){
//             resolve("Payment Sucessful!");

//         }
//             reject("Payment failed!");
        
//     });
// }
// (async function checkPayment() {
//     try{
//         let msg = await paymentStatus();
//         console.log(msg);
        
//     } catch(err){
//         console.log(err);
        
//     }
// })();

// // Async Await 2

// function takeOrder(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//           console.log("Pizza Ordered");
//             resolve();
//         }, 3000);
//     });
// }
// function preparePizza(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//           console.log("Pizza Prepared");
//             resolve();
//         }, 3000);
//     });
// }
// function bakePizza(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//           console.log("Pizza baked");
//             resolve();
//         }, 3000);
//     });
// }

// function deliverPizza(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//           console.log("Pizza Delivered");
//             resolve();
//         }, 3000);
//     });
// }

// (async function pizzaOrder() {

//     await takeOrder();
//     await preparePizza();
//     await bakePizza();
//     await deliverPizza();
    
// })();

// async await 3

function login (){
    return new Promise((resolve , reject )=>{
    
        setTimeout(() => {
            console.log("Logged in ");
            resolve();
        }, 3000);
    });
}

function fetchProfile (){
    return new Promise((resolve , reject )=>{
    
        setTimeout(() => {
            console.log("Profile Fetched ");
            resolve();
        }, 3000);
    });
}

function showDashboard(){
    return new Promise((resolve , reject )=>{
    
        setTimeout(() => {
            console.log("Dashboard View ");
            resolve();
        }, 3000);
    });
}

(async function loginSteps() {
    await login();
    await fetchProfile();
    await showDashboard();
})();
