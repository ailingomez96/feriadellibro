document.addEventListener('DOMContentLoaded', () => {
    const listaUsuarios = document.getElementById('listaDatos');
    const formulario = document.getElementById('miFormularioFL');

    function mostrarUsuarios(usuarios) {
        listaUsuarios.innerHTML = '';
        usuarios.forEach(usuario => {
            const item = document.createElement('li');
            item.innerHTML = `
                <h4>${usuario.nombre || 'No disponible'}</h4>
                <p><strong>Usuario:</strong> ${usuario.usuario || 'No disponible'}</p>
                <p><strong>Edad:</strong> ${usuario.edad || 'No disponible'}</p>
                <p><strong>Tipo de Libro:</strong> ${usuario.tipo_libro ? usuario.tipo_libro.join(', ') : 'No disponible'}</p>
                <p><strong>Autor Favorito:</strong> ${usuario.autor_favorito || 'No disponible'}</p>
                <p><strong>Lugar:</strong> ${usuario.region || 'No disponible'}</p>
            `;
            listaUsuarios.appendChild(item);
        });
    }

    function cargarYMostrarDatos() {
        fetch('../datos.json')
            .then(response => response.json())
            .then(data => {
                let usuarios = [...data.usuarios];
                let datosArray = JSON.parse(localStorage.getItem('formularioData')) || [];

                usuarios.push(...datosArray);

                console.log("Datos del JSON:", data.usuarios);
                console.log("Datos de localStorage:", datosArray);
                console.log("Datos combinados:", usuarios);

                mostrarUsuarios(usuarios);

                const numeroMaximo = Math.max(
                    ...usuarios.map(usuario => parseInt(usuario.usuario.replace('usuario ', ''), 10) || 0),
                    29 
                );
                localStorage.setItem('numeroUsuario', numeroMaximo + 1);
            })
    }

    function generarNumeroUsuario() {
        let numeroActual = parseInt(localStorage.getItem('numeroUsuario'), 10);
        if (isNaN(numeroActual)) {
            numeroActual = 30;
        }
        localStorage.setItem('numeroUsuario', numeroActual + 1);
        return numeroActual;
    }

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

            const datosFormulario = new FormData(formulario);
            const datosObj = {};
            datosFormulario.forEach((valor, clave) => {
                datosObj[clave] = valor;
            });

            datosObj.usuario = `usuario ${generarNumeroUsuario()}`;

            let datosArray = JSON.parse(localStorage.getItem('formularioData')) || [];
            datosArray.push({
                nombre: datosObj.nombre,
                usuario: datosObj.usuario,
                edad: datosObj.edad,
                tipo_libro: datosObj.tipo_libro.split(',').map(item => item.trim()), // Asegúrate de que esto sea consistente con el formulario
                autor_favorito: datosObj.autor_favorito,
                region: datosObj.region
            });
            localStorage.setItem('formularioData', JSON.stringify(datosArray));

            alert('Formulario cargado correctamente');
            formulario.reset();
            cargarYMostrarDatos();
        });
    }
});

window.onload = function (){
    console.log("La página y todos sus recursos se cargaron correctamente")
}

//EVENTOS PARA EL FORMULARIO

//NOMBRE Y APELLIDO
window.addEventListener("load",function(){
    let email = this.document.querySelector("#nombre");
    email.addEventListener("focus",function(){
    console.log("Entraste al input")
    });

    email.addEventListener("blur",function(){
    console.log("Saliste del input")
    });

    email.addEventListener("change",function(){
    console.log("Modificaste el input")
    });
});

//EDAD
window.addEventListener("load",function(){
    let email = this.document.querySelector("#edad");
    email.addEventListener("focus",function(){
    console.log("Entraste al input")
    });

    email.addEventListener("blur",function(){
    console.log("Saliste del input")
    });

    email.addEventListener("change",function(){
    console.log("Modificaste el input")
    });
});

//LIBRO FAVORITO
window.addEventListener("load",function(){
    let email = this.document.querySelector("#tipoDeLibro");
    email.addEventListener("focus",function(){
    console.log("Entraste al input")
    });

    email.addEventListener("blur",function(){
    console.log("Saliste del input")
    });

    email.addEventListener("change",function(){
    console.log("Modificaste el input")
    });
});

//AUTOR FAVORITO
window.addEventListener("load",function(){
    let email = this.document.querySelector("#autor");
    email.addEventListener("focus",function(){
    console.log("Entraste al input")
    });

    email.addEventListener("blur",function(){
    console.log("Saliste del input")
    });

    email.addEventListener("change",function(){
    console.log("Modificaste el input")
    });
});

//LUGAR DESDE DONDE NOS VISITAN
window.addEventListener("load",function(){
    let email = this.document.querySelector("#lugar");
    email.addEventListener("focus",function(){
    console.log("Entraste al input")
    });

    email.addEventListener("blur",function(){
    console.log("Saliste del input")
    });

    email.addEventListener("change",function(){
    console.log("Modificaste el input")
    });
});