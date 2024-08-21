document.addEventListener('DOMContentLoaded', () => {
    const listaUsuarios = document.getElementById('listaDatos');
    const formulario = document.getElementById('miFormularioFL');

    // Función para mostrar usuarios en la página
    function mostrarUsuarios(usuarios) {
        listaUsuarios.innerHTML = '';

        usuarios.forEach(usuario => {
            const item = document.createElement('li');
            item.innerHTML = `
                <h4>${usuario.nombre}</h4>
                <p><strong>Usuario:</strong> ${usuario.usuario || 'No disponible'}</p>
                <p><strong>Edad:</strong> ${usuario.edad}</p>
                <p><strong>Tipo de Libro:</strong> ${usuario.tipo_libro ? usuario.tipo_libro.join(', ') : 'No disponible'}</p>
                <p><strong>Autor Favorito:</strong> ${usuario.autor_favorito || 'No disponible'}</p>
                <p><strong>Región:</strong> ${usuario.region || 'No disponible'}</p>
            `;
            listaUsuarios.appendChild(item);
        });
    }

    // Función para obtener datos combinados de localStorage y datos JSON
    function cargarYMostrarDatos() {

        // Cargar datos del JSON
        fetch('../datos.json')
            .then(response => response.json())
            .then(data => {
                console.log("Datos cargados inicialmente:", data);

                let usuarios = [...data.usuarios];

                // Obtener los datos existentes del localStorage
                let datosArray = JSON.parse(localStorage.getItem('formularioData')) || [];

                // Agregar los datos del localStorage a la lista de usuarios
                usuarios.push(...datosArray);

                console.log("Datos combinados para mostrar:", usuarios);

                // Mostrar todos los usuarios
                mostrarUsuarios(usuarios);
            });
    }

    // Inicializar la carga y visualización de datos
    cargarYMostrarDatos();

    if (formulario) {
        formulario.addEventListener('submit', (event) => {
            event.preventDefault();

            let errores = [];
            let inputNombre = document.querySelector("input#nombre");

            if (inputNombre.value === "") {
                errores.push("El campo nombre tiene que estar completo");
            } else if (inputNombre.value.length < 5) {
                errores.push("El campo nombre debe tener al menos 5 caracteres");
            }

            if (errores.length > 0) {
                alert(errores.join('\n'));
                return;
            }

            // Crear un objeto con los datos del formulario
            const datosFormulario = new FormData(formulario);
            const datosObj = {};
            datosFormulario.forEach((valor, clave) => {
                datosObj[clave] = valor;
            });

            // Obtener los datos existentes del localStorage
            let datosArray = JSON.parse(localStorage.getItem('formularioData')) || [];
            datosArray.push(datosObj);

            // Guardar los datos actualizados en localStorage
            localStorage.setItem('formularioData', JSON.stringify(datosArray));

            console.log('Datos guardados en localStorage:', datosArray);
            alert('Formulario cargado correctamente');
            formulario.reset();

            cargarYMostrarDatos();
        });
    }

    window.onload = function () {
        console.log("La página y todos sus recursos se cargaron correctamente");
    };
});
