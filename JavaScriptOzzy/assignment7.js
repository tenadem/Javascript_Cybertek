/*
var row = 7;
for(i=1;i<=row;i++){
    for(j=1;j<=i;j++){
        console.log(i);
    }
   // console.log("\n");
}

for (var i = 1; i <= 7; i++) { //outer loop for 7 rows
    var print="";
    for(var j = 1; j <= i; j++) { //inner loop
        print=print+i;
    }
    console.log(print);
    
}


var row = 4;
for(var i=row;i>0;i--){
     var print = "";
     for(j = i; j>=1;j--){
         print = print + j+ " ";
     }
     for(var k=4-i;k>0;k--){
      
         print = " " + print ;
     }
     
     console.log(print);
}


for(var i = 1;i<=10;i++){
    var print = "";
    for(var j=1; j<=10;j++){
        print = print + (i*j) +" ";
    }
    console.log(print);    
}
*/

var row = 8;
for(var i=1; i<=row;i++ ){
    var print ="";
    for(var j= 1; j<=(row/2);j++){
        if(i%2!=0){
            print += "W B " ;
        }else{
            print += "B W " ;
        }
    }
    console.log(print);
}