const item_grupo = document.querySelectorAll('.item-group');

item_grupo.forEach((linea)=>{
    linea.querySelector('.title-group').addEventListener('click',()=>{
        linea.classList.toggle("select");
    })
})