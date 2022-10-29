const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// const form = document.querySelector('.form-show');
// const btnOpenForm = document.querySelector('#open-form');
// const btnCloseForm = document.querySelector('#form-close');





burguerMenu.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('inactive');
});




const form = document.getElementById('form');
const submit = document.getElementById('submitButton');

const name = document.getElementById('name');
const dni = document.getElementById('dni');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const direccion = document.getElementById('direccion');
const localidad = document.getElementById('localidad');
const vivienda = document.getElementById('vivienda');
const adoptar = document.getElementById('adoptar');
const socials = document.getElementById('socials');
const convive = document.getElementById('convive');
const otrosAnimales = document.getElementById('otros-animales'); //no obligatorio
const animalCasoVacaciones = document.getElementById('animal-caso-vacaciones');
const animalCasoMudanza = document.getElementById('animal-caso-mudanza');
const veterinario = document.getElementById('veterinario');
const compromiso = document.getElementById('compromiso');
const comentarios = document.getElementById('comentarios'); //no oblig


const formIsValid = {
    name: false,
    dni: false, 
    email: false, 
    tel: false,
    direccion: false,
    localidad: false,
    vivienda: false,
    adoptar: false,
    socials: false,
    convive: false,
    animalCasoVacaciones: false,
    animalCasoMudanza: false,
    veterinario: false, 
    compromiso: false,
    comentarios: false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

name.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.name = true;
})

dni.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.dni = true;
})

email.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.email = true;
})

telefono.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.telefono = true;
})

direccion.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.direccion = true;
})

localidad.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.localidad = true;
})

vivienda.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.vivienda = true;
})

adoptar.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.adoptar = true;
})

socials.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.socials = true;
})

convive.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.convive = true;
})

animalCasoVacaciones.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.animalCasoVacaciones = true;
})

animalCasoMudanza.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.animalCasoMudanza = true;
})

veterinario.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.veterinario = true;
})

compromiso.addEventListener('change', (e)=> {
    if(e.target.value.trim().lenght > 0) formIsValid.compromiso = true;
})


const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('form invalid')
}
