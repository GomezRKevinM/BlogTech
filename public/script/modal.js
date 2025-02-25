const backdrop = document.getElementById("fillScreen")
function showModal(id){

    const modal = document.getElementById(id);
    backdrop.style.display="inline";
    modal.style.display="inline";

}

function closeModal(id){
    const modal = document.getElementById(id);
    const modales = document.querySelectorAll('.modal');
    modales.forEach((modal)=>{
        const modal_title = modal.querySelector('.modal-title');
        const title = modal.querySelector('.tag-info-title');
        const contenido = modal.querySelector('.content-tag-info');

        modal.querySelector('.modal-title').style.backgroundColor="#363636";
        modal_title.style.backgroundColor="#363636";
        title.innerText="";
        contenido.innerHTML="";
    })
    backdrop.style.display="none";
    modal.style.display="none";
}