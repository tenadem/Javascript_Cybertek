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

