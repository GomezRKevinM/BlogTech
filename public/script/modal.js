const backdrop = document.getElementById("fillScreen");
let modalOpen;
function showModal(id){

    const modal = document.getElementById(id);
    const succes = modal.querySelector('.btn-success');

    backdrop.style.display="inline";
    modal.style.display="inline";
    modalOpen=id;
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal(modalOpen);
        }
        if (event.altKey && event.key === 'w') {
            clearContent(modalOpen);
        }
    });
    succes.addEventListener('click',()=>{
        closeModal(modalOpen)
        window.location.reload();
    })

}

function closeModal(id){
    const modal = document.getElementById(id);
    const modales = document.querySelectorAll('.modal');
    modales.forEach((modal)=>{
        const modal_title = modal.querySelector('.modal-title');
        const title = modal.querySelector('.tag-info-title');
        const contenido = modal.querySelector('.content-tag-info');

        if(modal_title && title && contenido){
            modal.querySelector('.modal-title').style.backgroundColor="#363636";
            modal_title.style.backgroundColor="#363636";
            title.innerText="";
            contenido.innerHTML="";
        }
    })
    backdrop.style.display="none";
    modal.style.display="none";
}

function clearContent(id) {
    const modal = document.getElementById(id);
    const content = modal.querySelector('.content-tag-info'); // Corregido: .content-tag-info
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.classList.remove('visible');
}

backdrop.addEventListener('click',()=>{
    closeModal(modalOpen);
})