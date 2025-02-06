const contentData ={
    'css-btn': {
        text: 'CSS: Hojas de estilo para diseño visual',
        img: '#'
    }, 
    'git-btn': {
        text: 'Git: Sistema de control de versiones distribuido',
        img: '#'
    },
    'github-btn': {
        text: 'GitHub: Plataforma de desarrollo colaborativo',
        img: '#'
    },
    'gitlab-btn': {
        text: 'GitLab: Plataforma DevOps completa',
        img: '#'
    },
    'html-btn': {
        text: 'HTML: Lenguaje de marcado para estructurar contenido web',
        img: '#'
    },
    'js-btn': {
        text: 'JavaScript: Lenguaje de programación para interactividad',
        img: '#'
    }
};

//Función de los clics en los botones
document.querySelectorAll('.ancoresNav').forEach(button => {
    button.addEventListener('click', () => {
        const content = contentData[button.id];
        document.getElementById('text-display').textContent = content.text;
        document.getElementById('tech-image').src = content.img;
        document.getElementById('tech-image').style.display = 'block';
    });
});