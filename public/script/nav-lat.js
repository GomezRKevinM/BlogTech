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

        
        setTimeout(()=>{
            window.scrollTo({
                top: window.scrollY-180,
                behavior: 'smooth'
            })
        },1000)
    })
})

upBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    upBtn.style.display="none";
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { 
        upBtn.style.display = "inline";
        upBtn.style.opacity = "1";
    } else {
        upBtn.style.display = "none";
    }
});