const navToggle= document.querySelector('.nav__toggle');
const navLink=document.querySelectorAll('.nav__link')
navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open');
});

navLink.forEach(link=> {
    link.addEventListener('click',() => {
         document.body.classList.remove('nav-open');
    })
})