console.log(1 == 1);
console.log("2" == 2);
console.log (true == 1);
console.log(false == 0);
console.log(false != 1);


console.log(3 === 3);
console.log("3" === 3); //false
console.log(false === 0);//false7
console.log(true !== 1); 

console.log("3" <= "4");

var n1;
var n2;

n1 = prompt("Enter n1");
n1 = parseInt(n1);
n2 = prompt("Enter n2");
n2 = parseInt(n2);

var bool = n1 > n2;

console.log("First number " + n1 + " is greater than Second number " + n2 + (" - ") + bool);

