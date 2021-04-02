//Task

var membership = true;
var orderAmount = 50;

if(membership === true && orderAmount > 40){
    console.log("You have free shippong");
} else{
    console.log("You have not free shipping");
}


//Task 
var hour = parseInt(prompt("Enter  the hour"));

if(hour < 12 ){
    console.log("Good Morning");
}else{
    if(hour < 15){
        console.log("Good Afternoon");
   } else {
       console.log("Good Evening");
   }
}