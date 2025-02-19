const backdrop = document.getElementById("fillScreen")
function showModal(id){

    const modal = document.getElementById(id);
    backdrop.style.display="inline";
    modal.style.display="inline";

}

function closeModal(id){
    const modal = document.getElementById(id);
    backdrop.style.display="none";
    modal.style.display="none";
}