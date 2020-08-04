var header = document.getElementById("navbar"),
    sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onscroll = myFunction;

$(document).ready(function() {
    myFunction();
});