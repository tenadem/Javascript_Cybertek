
/*
//shift() method
var myFish = ["angel", "clown","mandarin","surgeon"];
myFish.push("leo");
myFish.push("pink");
myFish.pop();
myFish.shift();
console.log(Array.isArray(myFish));
console.log(myFish.toString());
var shifted = myFish.shift();
console.log(shifted);
console.log(myFish);

var names = ["Andrew", "Edward", "Paul","Chris","John"];
while(names.length!=0){
    names.shift();
}

console.log(Array.isArray(names));
console.log(names.toString());
console.log(names);
console.log(names.length);


//splice() method==> modified the original array

var myFish =  ["angel", "clown", "mandarin","sturgeon"];

myFish.splice(2,0,"drum");
console.log(myFish);
myFish.splice(3,1);
console.log(myFish);
myFish.splice(2,1,"trumpet");
console.log(myFish);
myFish.splice(0,2,"parrot","anemone","blue");
console.log(myFish);
myFish.splice(2,2);
console.log(myFish);
myFish.splice(1,1);
console.log(myFish);
myFish.splice(1,0,"trumpet","drum","angel","clown");
console.log(myFish);
myFish.splice(2,1);
console.log(myFish);
myFish.splice(3,0,"anemone", "blue");
console.log(myFish);
myFish.splice(6,0,"mandarin");
console.log(myFish);
myFish.splice(0,2);
console.log(myFish);
myFish.splice(1,2);
console.log(myFish);
myFish.splice(2,0,"drum");
for(var i= 0;i<myFish.length;i++){
    console.log(myFish[i]);
}
console.log(myFish);

myFish.splice(1,2,"parrot,","trumpet");
console.log(myFish);
myFish.splice(3,1);
console.log(myFish);



//slice() ==> not modified  the original array: each time we create a new array 
*/

var animals=["dog","cat","monkey","donkey","dino","elephant"];

var animals1 = animals.slice(0,animals.length);
console.log(animals1);
console.log(animals1== animals);

var animals2 = animals.slice(1);


var animals3 = animals.slice(5,animals.length);


var animals4 = animals.slice(4);
var animals5 = animals.slice(0,1);
var animals6 = animals.slice(0,2);
var animals7 = animals.slice(0,0);
var animals8 = animals.slice(2,3);
var animals9 = animals.slice(2,5);


console.log(animals1);
console.log(animals2);
console.log(animals3);
console.log(animals4);
console.log(animals5);
console.log(animals6);
console.log(animals7);
console.log(animals8);
console.log(animals9);




