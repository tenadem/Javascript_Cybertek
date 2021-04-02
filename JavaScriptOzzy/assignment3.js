/*
var marks = parseInt(prompt("Enter the mark"));
if(marks < 60){
    console.log("Fail");

}else if(60 <= marks && marks < 90){
    console.log("Pass");

}else{
    console.log("Passed with Distinction");
}



var password, userName;
password = prompt("Enter the password");
userName = prompt("Enter the name");
var ActualUsername = "Test1" 
var ActualPassword = "Test1"

if(userName ==="" && password === ""){
    console.log("User name and password cannot be emmpty");

}else if(userName === "" && password !== ""){
    console.log("User name can not be empty");
}else if(userName !== "" && password === ""){
    console.log("Password con not be empty");

}else if(userName !== ActualUsername || password !== ActualUsername ){
    console.log("User name or password is not valid. Please verify");

}else if(userName === ActualUsername && password === ActualPassword){
    console.log("User Logged in succcessfully");
}


/*
var num1, num2, Operator;

num1=parseInt(prompt("Please enter first number"));
num2=parseInt(prompt("Please enter second number"));
Operator=prompt("Please enter Operator");

if(num1==="" || num2===""){
    console.log("Please enter valid numbers");
}else{
    if(Operator === "+"){
        console.log(num1+num2);
    }else if(Operator === "-"){
        console.log(num1-num2);
    }else if(Operator === "*"){
        console.log(num1*num2);
    }else if(Operator === "/"){
        console.log(num1/num2);
    }else{
        console.log("Invalid Operator");
    }
}


var Username, Password;
var ActualUsername, ActualPassword;
var ActualUsername = "Test1" 
var ActualPassword = "Test1"

Username=prompt("Please Enter your name");
Password=prompt("Please Enter your Password");

if(Username==="" && Password===""){
    console.log("UserName and Password Fields cannot be empty");
}else if(Username==="" && Password!=""){
    console.log("UserName cannot be empty");
}else if(Username!="" && Password===""){
    console.log("Password cannot be empty");
}else if(Username != ActualUsername || Password!=ActualPassword){
    console.log("UserName or password is not valid. Please verify");
}else if(Username===ActualUsername && Password===ActualPassword){
console.log("User Logged in successfull");
}




var income = parseInt(prompt("Enter your income, please!!!"));7
var taxAmount;

if(income<=150){
    taxAmount = income * 0.25;
}else if(income <= 300){
    taxAmount = (150 * 0.25) + (income - 150) * 0.30;
}else if(income <= 600){
    taxAmount = (150 * 0.25)  + (150 * 0.30) + (income - 300) * 0.35;
 
}else if(income <= 1200){
    taxAmount = (150 * 0.25)  + (150 * 0.30) + (300 * 0.35) + (income - 600 ) * 0.4;
}else{
    taxAmount = (150 * 0.25)  + (150 * 0.30) + (300 * 0.35) + (600 * 0.4) + (income - 1200) * 0.50;
}

console.log("Your income is:" + income +  "$, Your tax amount you have to pay is: " + taxAmount + "$");




var year = parseInt(prompt("Enter the year"));

if((year % 400 == 0 && year %100==0) || (year % 4 == 0 && year % 100 != 0)){
    console.log("leap year");
}else {
    console.log("Not a leap year");
}
*/

var call = parseInt(prompt("Enter calls"));
var bill;
if(call <=100){
  bill = 200;

}else if(call <= 150){
    bill = 200 + (call - 100) * 0.6;

}else if(call <=200){
    bill = 200 + (50 * 0.6) + (call - 150) * 0.5;
}else {
    bill = 200 + (50 * 0.6) + (50 * 0.5) + (call- 200) * 0.4;
}

console.log(bill);



