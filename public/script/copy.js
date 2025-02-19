function copyCode(elementId) {
    var codeElement = document.getElementById(elementId);
    var codeText = codeElement.innerText;

    navigator.clipboard.writeText(codeText).then(function() {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Copiado al portapapeles"
          });
    }, function(err) {
        console.error('Error al copiar el código: ', err);
    });
}
