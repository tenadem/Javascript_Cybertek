/*
1 2 3 4 5 6 7 8 9 10
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10



var row = 10;
for(var i = 0; i<row; i++){
    var print = "";
    for (var j=1; j <= row-i; j++){
        print += j+ " ";  

    }
    console.log(print);
}
for(var i = 2; i<=row;i++){
    print = "";
    for(var j = 1; j<=i;j++){
        print += j+ " "; 

    }
    console.log(print);
}









1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

var row =7;
for(var i=1;i<=7;i++){
    var print = "";
    for(var j = 1; j <= i;j++ ){
        print += j ;
    }
    console.log(print);
}

for (var i=1;i<=row-1;i++){
    var print ="";
    for(var j = 1;j <= row-i ; j++){
        print += j ;
    }
    console.log(print);

}









1 2 3 4 5 6 7
2 3 4 5 6 7
 3 4 5 6 7
  4 5 6 7
   5 6 7
    6 7
     7
    6 7
   5 6 7
  4 5 6 7
 3 4 5 6 7
2 3 4 5 6 7
1 2 3 4 5 6 7


var row = 7;
for(var i=1;i<=row;i++){
    var print = "";
     for (var j=i ; j<=row;j++){
         print += j+ " ";
     }
     for (var k=1;k<=i;k++){
         print = " " + print;
     }

     console.log(print);
}

    for (var i=1;i<=row-1;i++){
        var print = "";
        for (var j = row-i;j<= row;j++){
            print += j+ " "; 
        }
        for(var k = row-i; k >=1; k--){
            print = " " + print;
        }
        console.log(print);
    }






1
10
101
1010
10101
101010
1010101


var row = parseInt(prompt("Enter the row number"));

for(var i=1; i<=row;i++){
    var print = "";
    for(var j = 1; j<=i;j++){
        if(j%2!=0){
            print += 1;
        }else{
            print += 0;
        }
    }
    console.log(print);
}








1111111
1111122
1111333
1114444
1155555
1666666
7777777

*/


var row = 10;
for(var i = 1; i <= row ; i++){
    var print = "";
    for(var j= row;j>=1;j--){
        if(j>i){
            print+= 1;
        }else{
            print += i;
        }
    }
    console.log(print);

}
