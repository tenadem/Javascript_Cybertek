/*
var i = 1;
while(i<6){
    if(i%3==0){
        break;
    }
    i++;
    console.log(i);
}



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




var num = Math.floor(Math.random() * 20)+1;

do{

    var guess = parseInt(prompt("Enter positive number"));
    if(num == guess){
        break;
    }else{
        if(guess<num){
            console.log("Too small");
        }else{
            console.log("Too large");
        }
    }


}while(num!=guess)

console.log("Yessss");

*/
var count = 0;
var sum = 0;
while(count<=4){

var num = parseInt(prompt("Enter a number"));

if (num <=0 ){
    continue;
}else{
    sum+= num;
}
count++;
}


console.log("Sum: " + sum);