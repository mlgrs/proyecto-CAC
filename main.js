const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const form = document.querySelector('.form-show');
const btnOpenForm = document.querySelector('#open-form');
const btnCloseForm = document.querySelector('#form-close');

// const formShow = document.getElementById('form-show');
// const formClose = document.getElementById('form-close');


burguerMenu.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('inactive');
});

btnOpenForm.addEventListener('click', ()=> {
    form.classList.remove('inactive');
})

btnCloseForm.addEventListener('click', ()=> {
    form.classList.add('inactive');
})

