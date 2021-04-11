/*
1

var numArray = [1,45,23,45,65,3,7,2,32,61,87,38,91,0,24];
console.log(numArray[9]);
numArray.splice(4,1,35);
console.log(numArray);
var sum = numArray[5] + numArray[12];
numArray.splice(8,1,sum);
console.log(sum);
console.log(numArray);
console.log(numArray.slice(8,9));
console.log(numArray.sort());



2
*/
var array = Array(10);
console.log(array.length);
var sum = 0;
for(var i= 0; i<array.length;i++){
    array[i] = parseInt(prompt("Enter the " + i +". element of  the array" ));
    sum  += array[i];
}

console.log(sum);


