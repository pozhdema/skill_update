const sandwich = document.getElementsByClassName('sandwich')[0];

sandwich.addEventListener('click', function() {
  this.classList.toggle('active')
})