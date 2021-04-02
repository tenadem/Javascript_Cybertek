/*
QUESTION-2
Create a program that ask users to enter the radius of circle (r) and calculate the area

      Area = PI * r * r
      PI= 3.14

      Sample Output :  Your circle radius is 6 and the area of the circle is 113.1
*/

var area, r, PI;
r = parseInt (prompt("Enter the radius"));
PI = 3.14;
area = PI * r * r;
console.log ("Are of the circle: " + area);

/*
QUESTION-3
Write a program that let 2 users to enter their hourly wage and the amount of hours they worked for this week. 
And print which user earned more money.

output:  user_1 earning is more than user_2: true/false
*/

var hourlyWageWorker_1, hourlyWageWorker_2, hoursWorker_1, hoursWorker_2, earningOfWorker_2, earningOfWorker_2;
hourlyWageWorker_1 = parseInt(prompt("Enter houry wage of worker 1 "));
hourlyWageWorker_2 = parseInt(prompt("Enter houry wage of worker 2 "));
hoursWorker_1 = parseInt(prompt("Enter the total hours of worker 1 "));
hoursWorker_2 = parseInt(prompt("Enter the total hours of worker 2 "));


earningOfWorker_1 = hourlyWageWorker_1 * hoursWorker_1;
earningOfWorker_2 = hourlyWageWorker_2 * hoursWorker_2;

console.log("Salary of worker 1 " + earningOfWorker_1);
console.log("Salary of worker 2 " + earningOfWorker_2);
var bool = earningOfWorker_1 > earningOfWorker_2;
console.log("Worker 1 earns more than worker 1: " + bool); 