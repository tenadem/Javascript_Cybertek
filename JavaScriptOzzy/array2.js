
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


//index Of() method ==> show the first index of the element in the array. if not exist returns -1

var scores  = [10,20,30,10,40,20];

console.log(scores.indexOf(10));// 0;
console.log(scores.indexOf(20));// 1;
console.log(scores.indexOf(10,2));
var n1 = scores.indexOf(30,3); // 3
console.log(n1);//-1 ==> 30 is not exist after the 3. index

console.log(scores.indexOf(20,-1))// 5 ==> scores.length = 6 ==> 6 + (-1) = 5 

console.log(scores.indexOf(20,-5))// 1 ==> 6 +(-5) = 1 

console.log(scores.indexOf(20,-7)); //5 




//lastIndexOf() method
var numbers = [2,5,9,2];

console.log(numbers.lastIndexOf(2));//3
console.log(numbers.lastIndexOf(7));//-1
console.log(numbers.lastIndexOf(2,3));//3
console.log(numbers.lastIndexOf(2,2));//0
console.log(numbers.lastIndexOf(2,-2));//0 ==> number.length=4 ==> 4 +(-2) = from the 2. index
console.log(numbers.lastIndexOf(2,-1));//3




//sort() method

var numbers = [1,30,40,212];
numbers.sort();
console.log(numbers);

var mixArray = ["cat","Ant", 3, "elephant","Bee", 67];
mixArray.sort();
console.log(mixArray);

*/
var indices = [];
var array = ["a","b","a","c","a","d","b","c","d"];
var element = "d";

for(var i = 0;i<array.length; i++){
     if(array[i]== element){
         indices.push(array.indexOf(element,i));
     }

}

console.log(indices);

 

