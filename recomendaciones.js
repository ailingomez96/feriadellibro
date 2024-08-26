async function getRandomBook() {
    try {
        // Realiza una búsqueda para obtener libros de forma aleatoria
        const response = await fetch('https://openlibrary.org/subjects/love.json?limit=100'); 
        const data = await response.json();
        
        // Selecciona un libro aleatorio
        const randomIndex = Math.floor(Math.random() * data.works.length);
        const book = data.works[randomIndex];

        // Muestra la recomendación del libro en la página web
        displayBookRecommendation(book);

        // Muestra la recomendación del libro en la consola
        printBookRecommendationToConsole(book);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Función para mostrar la recomendación del libro en la página web
function displayBookRecommendation(book) {
    const recommendationDiv = document.getElementById('book-recommendation');
    recommendationDiv.innerHTML = '';

    if (book) {
        const title = book.title || 'No title';
        const author = book.authors ? book.authors.map(a => a.name).join(', ') : 'Unknown author';
        const coverId = book.cover_id ? book.cover_id : 'N/A';
        const coverUrl = coverId !== 'N/A' ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : '';

        recommendationDiv.innerHTML = `
            <h2>${title}</h2>
            <p><strong>Author:</strong> ${author}</p>
            <img src="${coverUrl}" alt="${title}" style="width:150px;">
        `;
    } else {
        recommendationDiv.innerHTML = 'No recommendations available';
    }
}

// Función para mostrar la recomendación del libro en la consola
function printBookRecommendationToConsole(book) {
    if (book) {
        console.log('--- Recomendación de Libro ---');
        console.log('Título:', book.title || 'No title');
        console.log('Autor(es):', book.authors ? book.authors.map(a => a.name).join(', ') : 'Unknown author');
        console.log('ID de Portada:', book.cover_id || 'N/A');
        console.log('-----------------------------');
    } else {
        console.log('No hay recomendaciones disponibles');
    }
}

window.onload = getRandomBook;

window.onload = function (){
    console.log("La página y todos sus recursos se cargaron correctamente")
}