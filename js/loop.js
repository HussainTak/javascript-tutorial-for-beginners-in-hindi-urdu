let a=1;
document.write("<ul>");
while(a<=10){
    document.write("<li>"+a+")hussain</li>");
    a=a+1;
}
document.write("/<ul>");

var b= 1;
do{
    document.write(b +" hello yahoo baba<br>");
    b=b+1;
}while(b<=10);

for(var c=1;c<=10; c++){
    if(c==5){
        document.write("shaikh:"+c+ "<br>")
        break;
    }
    document.write("number:"+c+"<br>");
}
for(var c=1;c<=10; c++){
    if(c %2==0){
        document.write(c+ "<br>");
    }

}

function fn(num) {
    for(let a = 1; a<= 10; a++){
        console.log(num * a)
    };
}
console.log(fn(6))
console.log(fn(7))
console.log(fn(8))