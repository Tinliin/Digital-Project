const burgerButton = document.querySelector('.burger-button');
const navList = document.querySelector('.nav_list');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  navList.classList.toggle('active');
});