var visited = localStorage.getItem('visited');
if (!visited) {
  alert("Disclaimer: The information you obtain at this site is not, nor is it intended to be, legal advice. You should consult an attorney for advice regarding your individual situation.");
  localStorage.setItem('visited', true);
}
