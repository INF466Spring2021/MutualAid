var visited = localStorage.getItem('visited');
if (!visited) {
  alert("Disclaimer: The information you obtain at this site is not, nor is it intended to be, legal advice. You should consult an attorney for advice regarding your individual situation.");
  localStorage.setItem('visited', true);
}

var totopbutton = document.getElementById("totopbutton")
var rootElement = document.documentElement

function gototop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
totopbutton.addEventListener("click", gototop)
