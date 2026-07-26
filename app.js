// function greet(name,callback) {
//     callback(name);
// }

// greet("abhay",(name)=>{

//     console.log(name+" hi how are you");
// });

// //calculator

// function calculator(a,b,callback) {

//     callback(a,b);
// }

// calculator(10,15,(a,b)=>{
//     console.log("a + b = ",a+b);
// })

// //array traverse

// function arrTraverse(arr,callback) {
//     callback(arr);
// }

// arrTraverse([1,2,3,4,5],(arr)=>{
//     arr.forEach(el => {

// console.log(el*el +" ");
        
//     });
// });

// async callbacks

function loginUser(callback){

    console.log("User log in process...");
    callback();
}

function fetchingProfile(callback){
    console.log("Fetching profile...");
    callback();
}

function showDashboard(callback) {
    console.log('Showing dashboard...');

    
    
}

loginUser(()=>{
    fetchingProfile(()=>{
        showDashboard(()=>{
            console.log("all done");
            
        });
    });
});