/* jQuery accordion + tabs */
$(document).ready(function() {
    $( ".accordion" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $( "#tabs" ).tabs();
    });

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

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
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
if(totopbutton){
    totopbutton.addEventListener("click", gototop, false);
}

/* Collapsible menu */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("collapsibleActive");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

/* Changes the dropdown arrow from facing right to facing down as the menu is clicked */
$(document).on('click', '.collapsible', function() {
    $(this).children().toggleClass('ui-icon-triangle-1-e ui-icon-triangle-1-s');
})
