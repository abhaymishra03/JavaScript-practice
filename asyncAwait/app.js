// Async Await 1 
 function paymentStatus(){
    return new Promise((resolve,reject)=>{
        let val = Math.random();
        if(val > 0.5){
            resolve("Payment Sucessful!");

        }
            reject("Payment failed!");
        
    });
}
(async function checkPayment() {
    try{
        let msg = await paymentStatus();
        console.log(msg);
        
    } catch(err){
        console.log(err);
        
    }
})();
