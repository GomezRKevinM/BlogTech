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

        swal.fire({
            position: "top-end",
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
formLogin.addEventListener('submit', authLogin);

const btnRegister = document.getElementById('btn-registrar');
const btnLogin = document.getElementById('btn-login');

btnRegister.addEventListener('click', () => {
    document.getElementById('register').style.display = 'block';
    document.getElementById('login').style.display = 'none';
})
btnLogin.addEventListener('click', () => {
    document.getElementById('register').style.display = 'none';
    document.getElementById('login').style.display = 'block';
})


function registrarUser(event){
    try{
        event.preventDefault();
        const id = document.getElementById('id').value;
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const username = document.getElementById('username').value;
        const usepass = document.getElementById('password').value;
        const date = new Date()
        const creado  = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        const userTelefono = document.getElementById('telefono').value;
    
        const data = {
            id: id,
            nombre: nombre.replace(/[#\-DELETE\'"]/g, ''),
            correo: correo.replace(/[#\-DELETE\'"]/g, ''),
            username: username.replace(/[#\-DELETE\'"]/g, ''),
            password: usepass.replace(/[#\-DELETE\'"]/g, ''),
            creado: creado,
            telefono: userTelefono.replace(/[#\-DELETE\'"]/g, '')
        };
        console.log(data);
    
        fetch('https://app-07f9025b-6a13-4685-a1e7-d30222c7d740.cleverapps.io/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                nombre: data.nombre,
                correo: data.correo,    
                username: data.username,
                password: data.password,
                creado: data.creado,
                telefono: data.telefono
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta de la API:', data);
            if (data.ok) {

                swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registro Exitoso",
                    text: "El usuario ha sido guardado exitosamente",
                    showConfirmButton: false,
                    timer: 1500
                });
                document.getElementById('register').style.display = 'none';
                document.getElementById('login').style.display = 'block';
            } else {
                swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Error al crear usuario",
                    text: "Error en el registro" || data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(error => {
            console.error('Error en el envío de datos:', error);
        });
    }catch(e){
        console.log(e);
    }
}

document.getElementById('formulario-register').addEventListener('submit', registrarUser);