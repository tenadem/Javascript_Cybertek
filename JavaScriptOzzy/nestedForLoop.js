/*
for(var i = 0;i<5;i++){
    console.log("First loop state: " + i);
    for(var j=0;j<=3;j++){
        console.log("Inner Loop at state: " + j);
        if(j==3){
            console.log("\n");
        }
    }
}
*/

var row = 5;
for (var i=1;i<=row;i++){
    
    for(var j=1; j<=i; j++){
        console.log("*");
       
    }
    console.log("\n");

    for(var k=row-i;k>=1;k--){
        console.log(" ");
    }
    
}
