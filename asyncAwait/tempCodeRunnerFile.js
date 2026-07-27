
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
