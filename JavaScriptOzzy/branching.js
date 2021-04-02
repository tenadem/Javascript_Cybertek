/*
var i = 1;
while(i<6){
    if(i%3==0){
        break;
    }
    i++;
    console.log(i);
}

*/

var sum = 0;
var number;
do{

    number = parseInt(prompt("Enter the a positive number"));
    if(number <0){
        break;
    }
    sum += number; 
}while(number<100)
    

console.log(sum);