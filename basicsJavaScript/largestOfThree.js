let num1 = prompt("Enter first number :")
let num2 = prompt("Enter second number :")
let num3 = prompt("Enter third number :")

if(num1>num2 && num1>num3){
    console.log(`${num1} is the largest number`)
} else if(num2>num1 && num2>num3){
    console.log(`${num2} is the largest number`)
} else{
    console.log(`${num3} is the largest number`)
}