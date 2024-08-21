//ALERT Y PROMPT //ALMACENAMIENTO DE INFORMACIÓN INGRESADA POR EL USUARIO

alert("¡Te damos la bienvenida al sitio oficial de la Feria!");

function cargarRecomendacionesDesdeLocalStorage() {
    let recomendacionesGuardadas = localStorage.getItem('recomendaciones');
    if (recomendacionesGuardadas) {
        return JSON.parse(recomendacionesGuardadas);
    }
    return [];
}

let recomendaciones = cargarRecomendacionesDesdeLocalStorage() || [];

function mostrarInformacionEnConsola() {
    console.log("Lista de Registros: ");
    for (let i = 0; i < recomendaciones.length; i++) {
        console.log("Categoría: " + recomendaciones[i].categoria + ", Subgénero: " + recomendaciones[i].subgenero);
    }
}

function guardarInformacionEnLocalStorage() {
    localStorage.setItem('recomendaciones', JSON.stringify(recomendaciones));
}

function nuestrasRecomendaciones() {
    let categoria = prompt("Elige una categoría: Ficción o No Ficción");
    let subgenero = prompt("Elige un subgénero.");

    let datosValidos = false;

    if (categoria && subgenero) {
        if (categoria === "Ficción") {
            if (subgenero === "Ciencia Ficción" ||
                subgenero === "Misterio" ||
                subgenero === "Thriller" ||
                subgenero === "Romance" ||
                subgenero === "Fantasía" ||
                subgenero === "Aventura" ||
                subgenero === "Terror" ||
                subgenero === "Magia" ||
                subgenero === "Historia" ||
                subgenero === "Literatura Juvenil") {
                datosValidos = true;
                if (subgenero === "Ciencia Ficción") {
                    alert("Te recomendamos libros de Ciencia Ficción como Dune o Neuromante.");
                } else if (subgenero === "Misterio" || subgenero === "Thriller") {
                    alert("Te recomendamos libros de Misterio/Thriller como Sherlock Holmes o El nombre de la rosa.");
                } else if (subgenero === "Romance") {
                    alert("Te recomendamos libros de Romance como Orgullo y prejuicio o Cumbres borrascosas.");
                } else if (subgenero === "Fantasía") {
                    alert("Te recomendamos libros de Fantasía como El señor de los anillos o Harry Potter.");
                } else if (subgenero === "Aventura") {
                    alert("Te recomendamos libros de Aventura como La isla del tesoro o Los tres mosqueteros.");
                } else if (subgenero === "Terror") {
                    alert("Te recomendamos libros de Terror como Drácula o It.");
                } else if (subgenero === "Magia") {
                    alert("Te recomendamos libros de Realismo Mágico como Cien años de soledad o El otoño del patriarca.");
                } else if (subgenero === "Historia") {
                    alert("Te recomendamos libros Históricos como Los pilares de la Tierra o La ladrona de libros.");
                } else if (subgenero === "Literatura Juvenil") {
                    alert("Te recomendamos libros de Literatura Juvenil como Harry Potter o Las crónicas de Narnia.");
                }
            } else {
                alert("Subgénero no reconocido en Ficción.");
            }
        } else if (categoria === "No Ficción") {
            if (subgenero === "Biografía" ||
                subgenero === "Autobiografía" ||
                subgenero === "Memorias" ||
                subgenero === "Historia" ||
                subgenero === "Ensayo" ||
                subgenero === "Autoayuda" ||
                subgenero === "Viajes" ||
                subgenero === "Ciencias" ||
                subgenero === "Salud y Bienestar") {
                datosValidos = true;
                if (subgenero === "Biografía") {
                    alert("Te recomendamos biografías como El diario de Ana Frank o Steve Jobs.");
                } else if (subgenero === "Autobiografía") {
                    alert("Te recomendamos autobiografías como Yo, Claudio o El hombre en busca de sentido.");
                } else if (subgenero === "Memorias") {
                    alert("Te recomendamos memorias como Educada o Una vida con propósito.");
                } else if (subgenero === "Historia") {
                    alert("Te recomendamos libros de Historia como Sapiens o El segundo sexo.");
                } else if (subgenero === "Ensayo") {
                    alert("Te recomendamos ensayos como El capital en el siglo XXI o Breves respuestas a las grandes preguntas.");
                } else if (subgenero === "Autoayuda") {
                    alert("Te recomendamos libros de Autoayuda como Los 7 hábitos de la gente altamente efectiva o Cómo ganar amigos e influir sobre las personas.");
                } else if (subgenero === "Viajes") {
                    alert("Te recomendamos libros de Viajes como En las antípodas o Comer, rezar, amar.");
                } else if (subgenero === "Ciencias") {
                    alert("Te recomendamos libros de Ciencias como Una breve historia del tiempo o El gen egoísta.");
                } else if (subgenero === "Salud y Bienestar") {
                    alert("Te recomendamos libros de Salud y Bienestar como El poder del ahora o Cómo hacer que te pasen cosas buenas.");
                }
            } else {
                alert("Subgénero no reconocido en No Ficción.");
            }
        } else {
            alert("Categoría no reconocida.");
        }

        if (datosValidos) {
            recomendaciones.push({ categoria: categoria, subgenero: subgenero });
            console.log(`Categoría: ${categoria}, Subgénero: ${subgenero}`);

            guardarInformacionEnLocalStorage();
            mostrarInformacionEnConsola();
        }
    } else {
        alert("Por favor, elige una categoría y un subgénero.");
    }
}

nuestrasRecomendaciones();


window.onload = function (){
    console.log("La página y todos sus recursos se cargaron correctamente")
}