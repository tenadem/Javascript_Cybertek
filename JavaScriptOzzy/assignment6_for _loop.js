/*
var num = 12;
for(var i = 1; i<=12; i++){
    console.log(num + "*" + i + "=" + (num*i));    

}

//Write a program to print Fibonacci series of n terms 
//where n is input by user : 


var n = parseInt(prompt("Enter the times"));
var first, second,result;
first = 0;
second = 1;
result = 0;
console.log(first);
console.log(second);
for(var i=0;i<=n; i++){
    result = first + second;
    console.log(result);
    first = second;
    second = result;
}


for(var i =1; i <=100; i++){
    if(i%5===0){
        console.log(i);
    }

}



for(var i=200;i>=0;i--){
    if(i%5==0){
        console.log(i);
    }
}
*/

for(var i=200;i>=0;i-=5){
console.log(i);
}