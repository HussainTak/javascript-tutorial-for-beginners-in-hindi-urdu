var ary = [
["harry",18,"male","b.com"],
["sunny",19,"male","bca"],
["sara",16,"male","b.tech"],
["hussain",17,"male","mca"]
];
// document.write(ary.lenght);
document.write("<table border= '1px' cellspacing'0'>");
for(var a=0; a< 4; a++){
    document.write("<tr>");
    for(var b=0; b<4;b++){
        document.write("<td>"+ary [a][b]+"</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");