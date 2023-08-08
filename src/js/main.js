const burgerButton = document.querySelector('.burger-button');
const navList = document.querySelector('.nav_list');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  navList.classList.toggle('active');
});

const form = document.querySelector('form');

form.addEventListener('click', (e) => {
  if (e.target.closest('.input_container')) {
    const input_container = e.target.closest('.input_container');
    const placeholder = input_container.querySelector('.placeholder');
    placeholder.style.display = "none";
  };

});