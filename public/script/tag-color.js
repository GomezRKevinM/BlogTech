
const sections = document.querySelectorAll('section[data-color]');

sections.forEach((section) => { // foreach para aplicar el estilado del background y del color.
    section.style.backgroundColor = section.dataset.color;
    section.style.color= section.dataset.colortext;
});
