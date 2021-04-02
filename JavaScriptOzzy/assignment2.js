//Write a program to convert gallons into Liters and display it.
var gallons = parseInt(prompt("Enter galloons"));
var liters = gallons * 3.78;
console.log(gallons + " galloons is " + liters + " liters.");


//Declare a variable MyFruit and assign your favorite fruit into it and display as follows:
//“My Fav Fruit is My Fruit”

var MyFruit = "Apple";
console.log("My Fav Fruit is " + MyFruit);


//Write a program - > Let user enter his name and birth year, and program will display:
//" Hello Ozzy ! Based on your input, your age is 15 :) "  

var name = prompt("Enter your name"); 
var birth = parseInt(prompt("Enter your birth"));

console.log("Hello " + name + "! Based on your input, your age is " + (2021 - birth) + ":)");

//How can you find if a number is odd or even in javascript. Please give an example/write syntax
var num = parseInt(prompt("Enter a number:"));
console.log(("Odd number: ") + ((num % 2)== 1) );
console.log(("Even number: ") + ((num % 2)== 0));
console.log("hello" + false);


