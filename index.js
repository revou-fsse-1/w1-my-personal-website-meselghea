const MenuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', fuction() {
  nav.classlist.toggle('slide');
});

