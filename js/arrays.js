var ary = [10,20,"harry","sara", 50];
var sum = 0;
document.write("<ul>");
for(var a= 0;a<5; a++){
   document.write("<li>" + ary[a]+ "</li>");
}
document.write("/<ul>");

var ary =new Array(3);
for(var g =0;g<3;g++){
    ary[g]=prompt( "enter the value :");
}
document.write("<ul>");
for(var a= 0;a<3; a++){
   document.write("<li>" + ary[a]+ "</li>");
}
document.write("/<ul>");