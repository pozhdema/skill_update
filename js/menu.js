let sandwich=document.getElementsByClassName("sandwich")[0];
let navigation=document.getElementById("navigation")
sandwich.addEventListener("click", function (event) {
   navigation.classList.toggle('active');
});