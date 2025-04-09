function authLogin(event){
    event.preventDefault();

    const usuario = document.getElementById('userName').value;
    const password = document.getElementById('userPass').value;

    const userClear = usuario.replace(/[#\-DELETE\'"]/g, '');
    const passClear = password.replace(/[#\-DELETE\'"]/g, '');



    fetch('https://app-07f9025b-6a13-4685-a1e7-d30222c7d740.cleverapps.io/login/autenticacion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: userClear,
            password: passClear
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.message;
        }
        return response.json();
    })
    .then(data => {
        const user = data.data[0];
        console.log(user);
        localStorage.setItem('id', user.id);
        localStorage.setItem('nombre', user.nombre);
        localStorage.setItem('telefono', user.telefono);
        localStorage.setItem('correo', user.correo);
        localStorage.setItem('username', user.username);
        localStorage.setItem('creado', user.creado);
        localStorage.setItem('loged', '');

        swal.fire({
            position: "center",
            icon: "success",
            title: "Inicio Exitoso",
            text: "Iniciando Sessión",
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            window.location.href = localStorage.getItem('history');
        }, 2000);
    })
    .catch(error => {
        console.error('Error:', error);
    })
}

const formLogin = document.getElementById('formulario-login');
formLogin.addEventListener('submit', (event)=>{
    authLogin(event);
});
