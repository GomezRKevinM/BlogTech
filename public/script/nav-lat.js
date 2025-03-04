const item_grupo = document.querySelectorAll('.item-group');
const nav_items = document.querySelectorAll('.nav-item');
let nombre = "kevin"

item_grupo.forEach((linea)=>{
    linea.querySelector('.title-group').addEventListener('click',()=>{
        linea.classList.toggle("select");
    })
})

nav_items.forEach((item)=>{
    item.addEventListener('click',()=>{
        const seccion = document.getElementById(item.innerText);
        seccion.classList.toggle('visible');
        location.href="#"+item.innerText;
    })
})
let edad = 28;