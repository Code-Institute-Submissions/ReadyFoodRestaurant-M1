window.onscroll=function(){myFunction()};
var header=document.getElementById("navbar"),
sticky=header.offsetTop;function myFunction(){window.pageYOffset>sticky?header.classList.add("sticky"):header.classList.remove("sticky")}

$("#sendRequest").click(function(){alert("Message sent successfuly")});