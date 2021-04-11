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




