const item_grupo = document.querySelectorAll('.item-group');
const nav_items = document.querySelectorAll('.nav-item');
const upBtn = document.querySelector('.up');
let nombre = "kevin"

item_grupo.forEach((linea)=>{
    linea.querySelector('.title-group').addEventListener('click',()=>{
        linea.classList.toggle("select");
    })
})

nav_items.forEach((item)=>{
    item.addEventListener('click',()=>{
        const seccion = document.getElementById(item.innerText);
        location.href="#js-"+item.innerText;
        upBtn.style.display="inline";
    })
})

upBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    upBtn.style.display="none";
})
