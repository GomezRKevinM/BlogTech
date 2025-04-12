const state = Boolean(localStorage.getItem('loged'));
console.log(state);
if(state){
    localStorage.setItem('history','/foro');
    window.location.href = '/login';
}

const temas = document.querySelectorAll('.li-tema');
const closeTema = document.querySelector('#closeBtnTema');

temas.forEach((tema)=>{
    tema.addEventListener('click',()=>{
        document.querySelector('#contenido').style.display = 'none';
        document.querySelector('#tema-section').style.display = 'flex';
    })
})

closeTema.addEventListener('click',()=>{
    document.querySelector('#contenido').style.display = 'flex';
    document.querySelector('#tema-section').style.display = 'none';
})