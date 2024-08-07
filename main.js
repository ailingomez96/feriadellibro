//ALERT Y PROMPT

alert ("¡Te damos la bienvenida al sitio oficial de la Feria!");

//Solicitar al usuario que ingrese una categoría y un subgénero
let categoria = prompt("Elige una categoría: Ficción o No Ficción");
let subgenero = prompt("Elige un subgénero.");

if (categoria === "Ficción") {
    if (subgenero === "Ciencia Ficción") {
        alert("Te recomendamos libros de Ciencia Ficción como Dune o Neuromante.");
    } else if (subgenero == "Misterio" || subgenero === "Thriller") {
        alert("Te recomendamos libros de Misterio/Thriller como Sherlock Holmes o El nombre de la rosa.");
    } else if (subgenero == "Romance") {
        alert("Te recomendamos libros de Romance como Orgullo y prejuicio o Cumbres borrascosas.");
    } else if (subgenero == "Fantasía") {
        alert("Te recomendamos libros de Fantasía como El señor de los anillos o Harry Potter.");
    } else if (subgenero == "Aventura") {
        alert("Te recomendamos libros de Aventura como La isla del tesoro o Los tres mosqueteros.");
    } else if (subgenero == "Terror") {
        alert("Te recomendamos libros de Terror como Drácula o It.");
    } else if (subgenero == "Magia") {
        alert("Te recomendamos libros de Realismo Mágico como Cien años de soledad o El otoño del patriarca.");
    } else if (subgenero == "Historia") {
        alert("Te recomendamos libros Históricos como Los pilares de la Tierra o La ladrona de libros.");
    } else if (subgenero == "Literatura Juvenil") {
        alert("Te recomendamos libros de Literatura Juvenil como Harry Potter o Las crónicas de Narnia.");
    } else {
        alert("Subgénero no reconocido en Ficción.");
    }
} else if (categoria === "No Ficción") {
    if (subgenero === "Biografía") {
        alert("Te recomendamos biografías como El diario de Ana Frank o Steve Jobs.");
    } else if (subgenero == "Autobiografía") {
        alert("Te recomendamos autobiografías como Yo, Claudio o El hombre en busca de sentido.");
    } else if (subgenero == "Memorias") {
        alert("Te recomendamos memorias como Educada o Una vida con propósito.");
    } else if (subgenero == "Historia") {
        alert("Te recomendamos libros de Historia como Sapiens o El segundo sexo.");
    } else if (subgenero == "Ensayo") {
        alert("Te recomendamos ensayos como El capital en el siglo XXI o Breves respuestas a las grandes preguntas.");
    } else if (subgenero == "Autoayuda") {
        alert("Te recomendamos libros de Autoayuda como Los 7 hábitos de la gente altamente efectiva o Cómo ganar amigos e influir sobre las personas.");
    } else if (subgenero == "Viajes") {
        alert("Te recomendamos libros de Viajes como En las antípodas o Comer, rezar, amar.");
    } else if (subgenero == "Ciencias") {
        alert("Te recomendamos libros de Ciencias como Una breve historia del tiempo o El gen egoísta.");
    } else if (subgenero == "Salud y Bienestar") {
        alert("Te recomendamos libros de Salud y Bienestar como El poder del ahora o Cómo hacer que te pasen cosas buenas.");
    } else {
        alert("Subgénero no reconocido en No Ficción.");
    }
} else {
    alert("Subgénero no reconocido.");
}

//MODIFICACIÓN DE BASE DE DATOS

fetch('./datos.json')
    .then(response => response.json())
    .then(data => {
    console.log("Datos cargados inicialmente:", data);

    let usuarios = [...data.usuarios];

    console.log("Cantidad de usuarios inicialmente:", usuarios.length);

    let nuevosUsuarios = [
    {
        "usuario": "usuario 30",
        "nombre": "Santiago Gómez",
        "edad": 26,
        "correo": "santiago.gomez@example.com",
        "tipo_libro": ["misterio", "aventura"],
        "region": "Tierra del Fuego"
    },
    {
        "usuario": "usuario 31",
        "nombre": "Laura Méndez",
        "edad": 32,
        "correo": "laura.mendez@example.com",
        "tipo_libro": ["novela", "autoayuda"],
        "region": "San Luis"
    },
    {
        "usuario": "usuario 32",
        "nombre": "Sofía Morales",
        "edad": 27,
        "correo": "sofia.morales@example.com",
        "tipo_libro": ["romántico", "aventura"],
        "region": "Chubut"
        },
        {
        "usuario": "usuario 33",
        "nombre": "Nicolás Fernández",
        "edad": 34,
        "correo": "nicolas.fernandez@example.com",
        "tipo_libro": ["ciencia ficción", "historia"],
        "region": "Neuquén"
        },
        {
        "usuario": "usuario 34",
        "nombre": "Camila Pérez",
        "edad": 29,
        "correo": "camila.perez@example.com",
        "tipo_libro": ["biografía", "novela"],
        "region": "Santa Cruz"
        },
        {
        "usuario": "usuario 35",
        "nombre": "Matías González",
        "edad": 31,
        "correo": "matias.gonzalez@example.com",
        "tipo_libro": ["policiaca", "misterio"],
        "region": "Tierra del Fuego"
        },
        {
        "usuario": "usuario 36",
        "nombre": "Valentina Rodríguez",
        "edad": 26,
        "correo": "valentina.rodriguez@example.com",
        "tipo_libro": ["aventura", "romántico"],
        "region": "Río Negro"
        },
        {
        "usuario": "usuario 37",
        "nombre": "Leonardo Castro",
        "edad": 32,
        "correo": "leonardo.castro@example.com",
        "tipo_libro": ["historia", "fantasía"],
        "region": "Chubut"
        },
        {
        "usuario": "usuario 38",
        "nombre": "Ana María Fernández",
        "edad": 30,
        "correo": "ana.fernandez@example.com",
        "tipo_libro": ["novela", "autoayuda"],
        "region": "Neuquén"
        },
        {
        "usuario": "usuario 39",
        "nombre": "Carlos Mendoza",
        "edad": 28,
        "correo": "carlos.mendoza@example.com",
        "tipo_libro": ["ciencia ficción", "misterio"],
        "region": "Santa Cruz"
        },
        {
        "usuario": "usuario 40",
        "nombre": "Gabriela López",
        "edad": 31,
        "correo": "gabriela.lopez@example.com",
        "tipo_libro": ["biografía", "aventura"],
        "region": "Tierra del Fuego"
        },
        {
        "usuario": "usuario 41",
        "nombre": "Ricardo Morales",
        "edad": 33,
        "correo": "ricardo.morales@example.com",
        "tipo_libro": ["policiaca", "historia"],
        "region": "Río Negro"
        }
];

    usuarios.push(...nuevosUsuarios);

    console.log("Usuarios nuevos:", nuevosUsuarios);
    console.log("Cantidad de usuarios después de agregar nuevos usuarios:", usuarios);
});


