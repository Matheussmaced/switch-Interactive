document.addEventListener('DOMContentLoaded', ()=>{

    const btnSwitch = document.querySelector('#ball');
    const moon = document.querySelector('#moon');
    const colorBackground = document.querySelector('body');
    const sun = document.querySelector('#sun');

    btnSwitch.addEventListener('click', ()=>{
        btnSwitch.classList.toggle('ballAnimation');
        moon.classList.toggle('moon');
        sun.classList.toggle('sun');

        colorBackground.classList.toggle('colorBackground');  
    })



})