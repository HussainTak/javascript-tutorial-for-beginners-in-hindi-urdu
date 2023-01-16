function fn(name,age) {
    return name,age
}
console.log(fn('Hussain',17));

var a=["hussain","zunaid","aman","lukman","neha"]
var val = a.slice(1,4);
console.log(val);



var a=["hussain","zunaid","aman","lukman","neha"]
a.splice(2,2,"Shanwaz")
console.log(a)


var age=[12,13,11,20]
console.log(age);
var b = age.some(checkAdult);
console.log (b);
function checkAdult(age){
    return age>=16
} 

var age=[12,13,11,15]
console.log(age);
var b = age.every(checkAdult);
console.log (b);
function checkAdult(age){
    return age>=10
}
 
var age=[12,13,11,15]
console.log(age);
var b = age.find(checkAdult);
console.log (b);
function checkAdult(age){
    return age>=10
}

var age=[12,13,11,15]
console.log(age);
var b = age.findIndex(checkAdult);
console.log (b);
function checkAdult(age){
    return age>=10
}

var age=[12,21,11,15]
console.log(age);
var b = age.filter(checkAdult);
console.log (b);
function checkAdult(age){
    return age>=13
}

var a =["hussain","aman","lukman","shanwaz"]
a.toString();
console.log(a);

var a =["hussain","aman","lukman","shanwaz"]
a.fill("khan");
console.log(a);
 

var a =["hussain","aman","lukman","shanwaz"]
a.forEach(loop);
function loop(value,index){
    console.log(index +":"+ value )
}

