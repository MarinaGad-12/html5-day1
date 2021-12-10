var red =document.getElementsByTagName("input")[0];
var green =document.getElementsByTagName("input")[1];
var blue =document.getElementsByTagName("input")[2];
var para=document.getElementsByTagName("p")[0];

function changed()
{
    var re =red.value;
    var gre=green.value;
    var bl=blue.value;
    para.style.color="rgb("+re+","+gre+","+bl+")";
}