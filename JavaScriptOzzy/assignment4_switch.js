/*
var num = parseInt(prompt("Enter your number"));

switch(num % 2){
    case 0 : 
     console.log("even number");break; 
    case 1 :
     console.log("Odd number");break;
    default :
    console.log("Enter a number");break;

}


var num = parseInt(prompt("Enter a number"));

switch (num) {
    case 0 : case 1: case 2:
        console.log("Low number");break;
    case 3 : case 4: case 5:
        console.log("Medium NUmber");break;
    default:
        console.log("Other number");
        break;
}



var cost = parseInt(prompt("Enter the cost"));
var payAmount;
switch(cost){
    case 1000 : 
         payAmount = cost - (cost * 0.05); break;
    case 10000:
         payAmount = cost - (cost * 0.08);break;
    default :
         payAmount = cost; break;
}

console.log("Pay Amount " + payAmount);

*/

var code = prompt("Enter the code");

switch (code) {
    case "R": case "r":
        console.log("Red"); break;
    case "O" : case "o":
        console.log("Orange");break;
    case "G" : case "g":
        console.log("Green");break;    
    default:
        console.log("Wrong code");break;
}
