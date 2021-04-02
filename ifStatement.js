var num = 20;
if(num >= 20 ){
    console.log("I have 20 and more number");
}

var temp = parseInt(prompt("Enter the temp of the room"));
if(70 < temp && temp < 80){
    console.log(temp + " F is a ideal temp");
}else{
    console.log(temp + " F is not an ideal temp");
}

//Task
var age = parseInt(prompt("Enter the age"));
if(age>= 18){
    console.log("You are eligible to vote");
}

//Task

var n1,n2,n3;
n1 = parseInt(prompt("Enter number n1"));
n2 = parseInt(prompt("Enter number n2"));
n3 = parseInt(prompt("Enter number n3"));

if(n1>n2 && n1>n3){
    console.log(n1 + " is gretest number");
}

if(n2>n1 && n2>n3){
    console.log(n2 + " is gretest number");
}

if(n3>n2 && n3>n1){
    console.log(n3 + " is gretest number");
}

//Task
var revenue, price,quntity,discount;
price = parseInt(prompt("Enter the price"));
quntity = parseInt(prompt("Enter the quantity"));
revenue = price * quntity;
discount = 0;

if(revenue > 5000){
  discount = revenue * 0.1;
  revenue = revenue - discount;
  
}

console.log("Net Revenue: " + revenue );
console.log("Discount: " + discount );


