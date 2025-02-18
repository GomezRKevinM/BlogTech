function copyCode(elementId) {
    var codeElement = document.getElementById(elementId);
    var codeText = codeElement.innerText;

    navigator.clipboard.writeText(codeText).then(function() {
        alert('Código copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el código: ', err);
    });
}
