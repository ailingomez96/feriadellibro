//LOCAL STORAGE

document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.getElementById('miFormulario');

    let datosGuardados = JSON.parse(localStorage.getItem('formularioData'));
    if (datosGuardados && Array.isArray(datosGuardados)) {

        console.log('Datos guardados:', datosGuardados);
    } else {

        datosGuardados = [];
    }


    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario


        const datosFormulario = new FormData(formulario);
        const datosObj = {};
        datosFormulario.forEach((valor, clave) => {
            datosObj[clave] = valor;
        });


        let datosArray = JSON.parse(localStorage.getItem('formularioData'));
        if (!Array.isArray(datosArray)) {
            datosArray = [];
        }

        datosArray.push(datosObj);


        localStorage.setItem('formularioData', JSON.stringify(datosArray));

        alert('Formulario cargado correctamente');

        formulario.reset();
    });
});

//EVENTOS PARA EL FORMULARIO

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

window.addEventListener("load",function(){
    let email = this.document.querySelector("#email");
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

window.addEventListener("load",function(){
    let email = this.document.querySelector("#info");
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