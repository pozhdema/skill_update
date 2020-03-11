let pull=document.getElementById("pull");
let sandwich=document.getElementsByClassName("sandwich")[0];

sandwich.addEventListener("click", function (event) {
    this.classList.toggle('active');
    pull.classList.toggle('active');
});