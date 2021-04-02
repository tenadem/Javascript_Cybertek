/*
var count = 1;
while(count<11){
    console.log("Count is: " + count);
    count++;
}


var count = 1;
do{
    console.log("Count is: " + count);
    count++;

}while(count<11)



var count = 1;
while(count<=10){
    console.log(count + ": Hello world");
    count++;

}


var z = 1;
while(++z<10){
    console.log("Hello" + z);
}


var count = 25;
while(count>10){
    console.log("in the loop");
    count--;

}

var sumOfEven= 0;
var sumOfOdd =0;
var number = 0;
while(number<=100){
    if(number%2==0){
        sumOfEven += number;
        
    }else{
        
        sumOfOdd +=number;
     
    }
    number++;
}
console.log("Total of even numbers are: " + sumOfEven);
console.log("Total of even numbers are: " + sumOfOdd);
}


var ActualUserName = "adem";
var ActualPassword = "abc";

var username;
var password; 

while((username!=ActualUserName)||(password!=ActualPassword)){
    username = prompt("Enter user name");
    password = prompt("Enter password");
}
console.log("Yes valid user name and password");
*/
//create randomly number
var number = (Math.floor(Math.random()* 20)+1);
do{
    var guess = parseInt(prompt("Enter your guess number"));

    if(guess == number){
        break;
    }else{
        if(guess<number){
            console.log("Too small");
        }else{
            console.log("Too large");
        }
    }
    
    
}while(number!=guess)

console.log("Conrat,you got it");
console.log("Number is:" + number);
console.log("Your number is: " + guess);


