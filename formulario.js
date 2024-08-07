//LOCAL STORAGE

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el formulario
    const formulario = document.getElementById('miFormulario');

    // Comprobar si hay datos guardados y rellenar el formulario
    let datosGuardados = JSON.parse(localStorage.getItem('formularioData'));
    if (datosGuardados && Array.isArray(datosGuardados)) {
        // Aquí puedes implementar una forma de mostrar los datos guardados si lo deseas
        console.log('Datos guardados:', datosGuardados);
    } else {
        // Inicializar datosGuardados como un array vacío si no es un array
        datosGuardados = [];
    }

    // Función para manejar el envío del formulario
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener los datos del formulario
        const datosFormulario = new FormData(formulario);
        const datosObj = {};
        datosFormulario.forEach((valor, clave) => {
            datosObj[clave] = valor;
        });

        // Obtener los datos existentes y añadir los nuevos
        let datosArray = JSON.parse(localStorage.getItem('formularioData'));
        if (!Array.isArray(datosArray)) {
            datosArray = [];
        }

        datosArray.push(datosObj);

        // Guardar los datos en el localStorage
        localStorage.setItem('formularioData', JSON.stringify(datosArray));

        alert('Formulario cargado correctamente');

        // Opcional: Resetear el formulario si se desea
        formulario.reset();
    });
});
