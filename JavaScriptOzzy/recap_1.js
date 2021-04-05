/*
var hourlyRate, hours, salary;
hourlyRate = 10;
hours = parseInt(prompt("Enter your total hours"));

salary = hours * hourlyRate;

console.log("you worked this " + hours + " this week and you made $" + salary);


var num,sum,average;
sum = 0;
for (var i= 0;i<4;i++){
    var num = parseInt(prompt("Enter your number"));

    sum += num;

}
average = sum / i;
console.log("Average " + average);



var price, quantity, revenue, discount;

price = parseInt(prompt("Enter the price"));
quantity = parseInt(prompt("Enter the quantity"));

revenue = price * quantity;
discount = 0;



if (quantity>=3000){
    discount = revenue * 0.15;
    
}else if(quantity>=5000){
    discount = revenue * 0.25;
   

}else if(quantity>=10000){
    discount = revenue * 0.40;
}

revenue -= discount;

console.log("Revenue:" + revenue);
console.log("Discount:" + discount);




var carType = prompt("Enter the car Type");

switch(carType){
    case "toyota": console.log("good for uber"); break;
    case "ferrari": console.log("good for race");break;
    case "mercedes": console.log("good for luxury");break;
    default : console.log("do not buy others");break;
}


for (var i = 1;i<=100;i++){
    if(i%5==0||i%7==0){
        console.log(i); 
    }
}
*/
var count = 0;

for(var i=0;i<=4;i++){
    var num = parseInt(prompt("Enter a number"));
    if(10 <num && num<20){
        count++;
    }
}
console.log(count);