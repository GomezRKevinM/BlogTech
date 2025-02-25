
const sections = document.querySelectorAll('section[data-color]');
const tag_sec = document.querySelectorAll('.tag-info');
const tag_cont = document.querySelectorAll('.tag-info-content');
const puntuactions = document.querySelectorAll('.punctuation');
const modals = document.querySelectorAll('.modal');
const tags = document.querySelectorAll('.tag');


modals.forEach((modal)=>{
    tag_sec.forEach((tag)=>{
        tag.addEventListener("click",()=>{
        
            let titulo_tag = modal.querySelector('.tag-info-title');
            let titulo_modal =modal.querySelector('.modal-title');
            let contenido = modal.querySelector('.content-tag-info');
    
            if(contenido.classList.contains("oculto") || tag.classList.contains("select")){
                contenido.classList.toggle("oculto");
                contenido.classList.toggle("visible");
            }
    
    
            titulo_tag.innerHTML=tag.querySelector('h2').innerHTML;
            titulo_modal.style.backgroundColor=tag.dataset.color;
            contenido.innerHTML=tag.querySelector('.tag-info-content').innerHTML;
            tag.classList.toggle("select");
        })
    })

    sections.forEach((section) => { // foreach para aplicar el estilado del background y del color.
        section.style.backgroundColor = section.dataset.color;
        section.style.color= section.dataset.colortext;
    });
    function closeTagInfo(){
        let titulo_tag = modal.querySelector('.tag-info-title');
        let titulo_modal =modal.querySelector('.modal-title');
        let contenido = modal.querySelector('.content-tag-info');
    
        contenido.innerHTML="";
        titulo_tag.innerHTML="";
    }
})


const tagCode = document.querySelectorAll('.code');

tagCode.forEach((code)=>{
    code.innerText =codeConverter(code);
})



function codeConverter(etiqueta){
    return "<"+etiqueta.innerHTML+">";
}

puntuactions.forEach((signo)=>{
    if(signo.innerText=='"'){
        signo.style.color="green";
    }
})

tags.forEach((tag)=>{
    if(tag.innerText.toLowerCase()==document.querySelector('.tag-info-title').innerText.toLowerCase()){
        tag.style.color="blue";
    }
})