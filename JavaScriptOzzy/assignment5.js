/*
var count = 0;
while(count<5){
    console.log("HELLO");
    ++count;
}


var bound = 1;
var sum = 0;

while(bound <=100){
    var num = Math.floor(Math.random() * 100) + 1;
    console.log(bound + ":" + num);
    sum += num;
    bound++;

}

console.log(sum);

var count = 1;
do{

if(count%2==0){
    console.log(count);
}

count++;

}while(count<=100);

*/

var num = 1;
var end = 10;
var str = "";
while(num <= end){
 
    
    if(num%2!=0){
      str = str + num + ",";  
    }

    if(num == end){
        str = str.substring(0, str.length-1);
    }

    num++;
}

console.log(str);