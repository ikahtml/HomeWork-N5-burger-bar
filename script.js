let navbar = document.querySelector('.ul-list');
let toggleButton = document.getElementById('toggleButton')
toggleButton.addEventListener('click', function(){
    toggleButton.classList.toggle('active');
    navbar.classList.toggle('activeNav');
})