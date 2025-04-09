
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
                    position: "center",
                    icon: "success",
                    title: "Registro Exitoso",
                    text: "El usuario ha sido guardado exitosamente",
                    showConfirmButton: false,
                    timer: 1500
                });

                setTimeout(() => {
                    window.location.href = localStorage.getItem('history');
                }, 1500);
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