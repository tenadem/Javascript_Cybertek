/*
//1
var array = Array(1000);
var str = " ";
for(var i = 1; i<=array.length;i++){
    array[i-1] = i;
    str += array[i-1] +" ";
    if(i %10==0){
        str += "\n"  ;
    }
       
    }
    
console.log(str);





2
var array = Array(10);
for(var i = 0; i<array.length;i++){
    array[i] = (i+1) * 19; 
    console.log(array[i]);




3
var arr = ["A","Z","B","P","T","X","C"];

var searchChar = prompt("Enter the particular character");

if(arr.indexOf(searchChar)!=-1){
    console.log( searchChar + " found");
}else{
    console.log( searchChar + " Not found");
}



4
*/
var n = 15;
var arr = Array(n);

for(var i=0; i<arr.length;i++){
   arr[i] = i;
   if(i>1){
       arr[i] = arr[i-1] + arr[i-2];
   } 
}

console.log(arr);


/*
Question 5:
In mathematics, the Fibonacci series are the numbers in the following integer sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
By definition, the first two numbers in the Fibonacci sequence are 0 and 1, 
and each subsequent number is the sum of the previous two.

Write a JavaScript Program to generate above series till n number of times (For example you can try with 
n = 10 and n = 15) and store it in One-dimensional array.
For n = 10, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
For n = 15, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377

Write a for loop to print all the elements of the array.

*/
var count = 12; 
var str="";

var fib = new Array(count); //Array to store the series
fib[0] = 0; //First member of the series is always 0
fib[1] = 1; //Second member of the series is always 1

// Store the values in fib array
for (var i = 2; i < count; i++) { 
    fib[i] = fib[i - 1] + fib[i - 2]; //next number is always the sum of previous two numbers
}

// Print the values from fib array
for (var i = 0; i < fib.length; i++) {
    if(i==fib.length-1){
       str=str+fib[i];
    }else{
        str=str+fib[i] +",";
    }
}
console.log(str);


