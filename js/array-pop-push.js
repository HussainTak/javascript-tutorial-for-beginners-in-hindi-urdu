var a = ["hussain", "lukman", "shanwaz", "aman"];
document.write(a + "<br>");
a.pop();
document.write(a + "<br>");
a.push("sahil");
document.write(a + "<br> <br>");

var a = ["hussain", "lukman", "shanwaz", "aman"];
document.write(a + "<br>");
a.shift();
document.write(a + "<br>");
a.unshift("sahil");
document.write(a + "<br><br><br><br><br><br>");

var a = ["hussain", "lukman", "shanwaz", "aman"];
var b = ["neha", "puza"];
var c = ["rahul", "lasay"];
var d = a.concat(b, c);
document.write(d + "<br><br><br>");

var a = ["hussain", "lukman", "shanwaz", "aman"];
var b = ["neha", "puza"];
var c = a.concat(b + "<br><br><br><br>");
document.write(c + "<br>");
var d = c.join("&")
document.write(d + "<br>");

var a = ["hussain", "lukman", "shanwaz", "aman"];
document.write(a + "<br>");
var b = a.slice(-3, -1);
document.write(b + "<br><br><br>");

var a = ["hussain", "lukman", "shanwaz", "aman"];
document.write(a + "<br>");
a.splice(1, 1, "rahul", "neha");
document.write(a + "<br><br><br><br>");

var a = ["hussain", "lukman", "shanwaz", "aman"];
document.write(a + "<br>");
var b = Array.isArray(a);
document.write(b + "<br>");

var a = ["hussain", "lukman", "shanwaz", "aman","hussain"];
document.write(a + "<br>");
var b= a.indexOf("hussain",3);
document.write(b + "<br>");
var c= a.lastIndexOf("hussain",3);
document.write(c + "<br>");

var a = ["hussain", "lukman", "shanwaz", "aman","hussain"];
document.write(a + "<br>");
var b= a.includes("hussain");
document.write(b + "<br>");

