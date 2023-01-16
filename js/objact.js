var a = {
fname : "hussain",
lname : "khan",
age : 18,
email : "htak@467", 
movie :[ "dhoom","hum","tum","okn"],
salary : function(){
    return  25000;
},
}
console.log(a.salary());

var hussain = new Object();
hussain.fname="sahil";
hussain.lname= "khan";
console.log(hussain.fname);

var studant =[
    {name :"ram",age:18},
    {name :"karan" ,age:20},
    {name :"kara" ,age:10},
];
console.log(studant);
for(var b=0;b <studant.length;b++){
console.log(studant[b].name);
}

const c ={
    name:"hussain",
    age : 25
};
c.name="yahoo baba";
c.age =30;
console.log(c);