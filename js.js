/* Alert on visit */
function welcome() {
    var visited = sessionStorage.getItem('visited');
    if (!visited) {
      alert("Disclaimer: The information you obtain at this site is not, nor is it intended to be, legal advice. You should consult an attorney for advice regarding your individual situation.");
      sessionStorage.setItem('visited', true);
    }
}



/* Back to top button */
var totopbutton = document.getElementById("totopbutton")
var rootElement = document.documentElement

function gototop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
if(totopbutton){
    totopbutton.addEventListener("click", gototop, false);
}



/* Collapsible menu */
var collMenu = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collMenu.length; i++) { /* iterates through the function 1 time */
    collMenu[i].onclick = function () {
        this.classList.toggle("active"); /* grabs the clicked collapsible menu, toggles active on/off */
        this.nextElementSibling.classList.toggle("display"); /* grabs the clicked collapsible menu, grabs the next element inside the parent div and toggles display on/off */
    }
}



/* Changes the arrow direction when collapsible menu is clicked */
$(document).on('click', '.collapsible', function() {
    var y = $(this);
    var x = $(this).children(".collArrow");
    if ($(x).hasClass("rightArrow")) {
        $(x).replaceWith('<span class="collArrow">&darr;</span>');
        $(y).attr("aria-expanded", "true");
    }
    else {
        $(x).replaceWith('<span class="collArrow rightArrow">&rarr;</span>');
        $(y).attr("aria-expanded", "false");
    }
});



/* Hamburger menu */
document.getElementById("bars").onclick = function() {
    var x = $("#myLinks").css("display")
    if (x == "none") {
        $("#myLinks").css("display", "block");
        $("#bars").attr("aria-expanded", "true");
    }
    else {
        $("#myLinks").css("display", "none");
        $("#bars").attr("aria-expanded", "false");
    }
}
