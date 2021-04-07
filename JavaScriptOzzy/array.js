
/*
var scores1 = new Array();
var scores2 = Array(10);

var scores3 = new Array(9,10,5,7);

//++++++++//
var scores4 = ["red","green",1,2,false];
//++++++++//
var scores5 = [];

console.log(scores4[0]);
console.log(scores4[2]);
console.log(scores4[3]);

console.log(scores4.toString());

console.log(scores4[2]+scores4[3]);


var months = ["jan","feb","Mar","Apr","May","jun","Jul","Aug","Sep","Okt","Nov","Dec",];

var index = parseInt(prompt("Enter the index number"));

console.log("The month name is " + months[index]);

console.log("The length of the array is: " + months.length);

var shopping = ["cheese", "pumpkin", "bread","eggs","milk","almonds"];

for(var i = 0; i<shopping.length; i++){
    console.log(shopping[i]);
}
console.log(shopping.toString());
console.log(shopping.sort());

var cars = ["Toyota", "BMW","Honda","Mercedes","Kia",];
//count = 0;
//leo:
var flag = false;
for(var i=0;i<cars.length;i++){
    if(cars[i]=="Honda"){
        flag = true;
        break;

    }
}

if(flag == true){
    console.log("Found it");

}else{
    console.log("Not found");
}
        /*console.log("I found your car " + cars[i] + " in the array");
    break leo;
    
    count++;
}
if(count == cars.length){
    console.log("I could not found Honda");

}
console.log(cars.includes("Honda"));


console.log(Array.isArray(cars));
console.log(cars.toString());


var shopping = ["cheese", "pumpkin", "bread","eggs","milk","almonds"];
if(Array.isArray(shopping)){
    var str = "";
    for(var i=0;i<shopping.length;i++){
        str += shopping[i] + ",";
    }
        console.log(str.substring(0,str.length-1));
}else{
    console.log("Array is not an array");
}


var stack =[];
stack.push("adem");
stack.push("sinem");
stack.push("soner");

console.log(stack);

stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.push("erhan");
console.log(stack);
*/
var array = [1,2,3,4];
var selections = parseInt(prompt("Enter the selection"));

switch(selections){
    case 1: 
    array.push(5)
    array.push(6);
    break;
    case 2:
        array.pop();break;
    case 3 : 
    console.log(Array.isArray(array));
    if(Array.isArray(array)==true){
        for(var i=0; i<array.length; i++){
            console.log(array[i]);
           
        }
    }
    break;
    case 4:
        break;
}

console.log(array.toString());
console.log(array);