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
                <p><strong>Tipo de Libro:</strong> ${usuario.tipoDeLibro || 'No disponible'}</p>
                <p><strong>Autor Favorito:</strong> ${usuario.autor || 'No disponible'}</p>
                <p><strong>Lugar:</strong> ${usuario.lugar || 'No disponible'}</p>
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
                    ...usuarios.map(usuario => parseInt(usuario.usuario, 10) || 0),
                    29 
                );
                localStorage.setItem('numeroUsuario', numeroMaximo + 1);
            })
    }

    function generarNumeroUsuario() {
        // Obtén el número de usuario desde localStorage
        let numeroActual = parseInt(localStorage.getItem('numeroUsuario'), 10);
        if (isNaN(numeroActual)) {
            // Si el número es NaN, comienza desde 30 (o cualquier valor que consideres apropiado)
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

            datosObj.usuario = generarNumeroUsuario();

            let datosArray = JSON.parse(localStorage.getItem('formularioData')) || [];
            datosArray.push(datosObj);
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