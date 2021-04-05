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
*/


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



