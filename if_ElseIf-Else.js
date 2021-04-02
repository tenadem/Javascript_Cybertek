var n1,n2,n3;
n1 = parseInt(prompt("Enter first number"));
n2 = parseInt(prompt("Enter second number"));
n3 = parseInt(prompt("Enter third number"));

if(n1>n2 && n1>n3 ){
    console.log(n1 + " is largest");

}else if(n2>n1 && n2>n3){
    console.log(n2 + " is largest");

}else {
    console.log(n3 + " is largest");
}