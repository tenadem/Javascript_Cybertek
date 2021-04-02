
/*
for(var i = 0; i<5;i++){
    console.log("javascript");
}

//print ll numbers between 0 and 50 that are divisible by 4
for (var i = 0;i<=50;i++){
    if(i %4 ===0){
        console.log(i);
    }
}

for(var i = 100; i>=0;i--){
    if(i%3===0){
        console.log(i + " is divisible by 3" );
    }else{
        console.log(i+" is not divisible by 3");
    }
}



var times = parseInt(prompt("Enter repeated times"));

for(var i=0;i<times;i++){
    var n1 = parseInt(prompt("Enter n1"));
    var n2 = parseInt(prompt("Enter n2"));
    if(n1>n2){
        console.log(n1 + " is bigger");
    }else if(n2>n1){
        console.log(n2 + " is bigger");
    }else{
        console.log("equal");
    }
}


for (var i=1; i<=32; i++){
    if(i%2===0){
        alert(i+" is a even numbr");
    }else{
        alert(i + " is a odd number");
    }
}
  
   var sum = 0;

   for(var i = 0; i < 5; i++){
      var number = parseInt(prompt("Enter a number"));
       sum += number;
       console.log(sum);

   } 

   console.log("Total number is: " + sum);
  
  var number = parseInt(prompt("Enter a psitive integer number"));

  for(var i = 1; i<=10;i++){
      console.log(number + "*"+i +"=" + (number*i));

  }

  
  */

  var n = parseInt(prompt("Enter your iteraton number"));
  var sum = 0;
  for(var i = 1 ; i<=n;i++){
     sum += 1/i;
     console.log(sum);
  }

  console.log(sum);




