//callback 1
// function greet(name,callback) {
    callback(name);
}

greet("abhay",(name)=>{

    console.log(name+" hi how are you");
});

//calculator

function calculator(a,b,callback) {

    callback(a,b);
}

calculator(10,15,(a,b)=>{
    console.log("a + b = ",a+b);
})

//array traverse

function arrTraverse(arr,callback) {
    callback(arr);
}

arrTraverse([1,2,3,4,5],(arr)=>{
    arr.forEach(el => {

console.log(el*el +" ");
        
    });
});

// async callbacks

function loginUser(callback){

    setTimeout(() => {
        console.log("User log in process...");
    callback();
    }, 2000);
}

function fetchingProfile(callback){
    setTimeout(() => {
        console.log("Fetching profile...");
    callback();
    }, 2000);
}

function showDashboard(callback) {
   setTimeout(() => {
     console.log('Showing dashboard...');
     callback();
   }, 2000);

    
    
}

loginUser(()=>{
    fetchingProfile(()=>{
        showDashboard(()=>{
            console.log("all done");
            
        });
    });
});



function takeOrder(callback){
    setTimeout(()=>{
        console.log("Taking Orders...");
        callback();
        
    },2000);
}
function preparePizza(callback){
    setTimeout(()=>{
        console.log("Preparing pizza...");
        callback();
        
    },2000);
}
function bakePizza(callback){
    setTimeout(()=>{
        console.log("Baking pizza...");
        callback();
        
    },2000);
}
function deliverPizza(callback){
    setTimeout(()=>{
        console.log("Delivering pizza...");
        callback();
        
    },2000);
}


takeOrder(()=>{
    preparePizza(()=>{
        bakePizza(()=>{
            deliverPizza(()=>{
                console.log("Order is ready to deliver!");
                
            }
                );
                
            });
        });
    });



// callback 4
function addToCart(callback) {
    setTimeout(() => {

        console.log("Item is added to the cart...");
        callback();
        
    }, 2000);
}
function chargePayment(callback) {
    setTimeout(() => {
        
        console.log("Payment Processing...");
        callback();
        
    }, 2000);
}
function generatingInvoice(callback) {
    setTimeout(() => {
        
        console.log("Invoice Created...");
        callback();
        
    }, 2000);
}
function sendEmail(callback) {
    setTimeout(() => {

        console.log("Email Sent...");
        callback();
        
    }, 2000);
}

addToCart(()=>{
    chargePayment(()=>{
        generatingInvoice(()=>{
        sendEmail(()=>{
            console.log("All Done !");
            
        });
    });
    });
});




//callback 5
function registerUser(callback){

    setTimeout(() => {

        console.log("User is been registered!");
        callback();

        
        
    }, 2000);

}
function verifyEmail(callback){

    setTimeout(() => {

        console.log("Email is been verified!");
        callback();
        
        
    }, 2000);

}
function login(callback){

    setTimeout(() => {

        console.log("User logged in!");
        callback();

        
        
    }, 2000);

}
function fetchProducts(callback){

    setTimeout(() => {

        console.log("Product is fetched!");
        callback();

        
        
    }, 2000);

}
function placeOrder(callback){

    setTimeout(() => {

        console.log("Order Placed!");
        callback();

        
        
    }, 2000);

}
function payment(callback){

    setTimeout(() => {

        console.log("Payment Processed!");
        callback();

        
        
    }, 2000);

}
function invoice(callback){

    setTimeout(() => {

        console.log("Invoice sent!");
        callback();
        
    }, 2000);

}

//callback hell
registerUser(()=>{


    verifyEmail(()=>{
        login(()=>{
            fetchProducts(()=>{
                placeOrder(()=>{
                    payment(()=>{
                        invoice(()=>{
                            console.log("All done !!");
                            
                        })
                    })
                })
            })
        })
    })
})



 function task1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback(); 
    }, 1000);

}

function task2() {
    console.log("Task 2");
}

task1(task2);