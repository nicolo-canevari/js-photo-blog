// array oggetti
const photoData = [
    {
        "id": 1,
        "title": "Skate Park",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
    },
    {
        "id": 2,
        "title": "Passeggiata",
        "date": "16-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
    },
    {
        "id": 3,
        "title": "Alpi",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
    },
    {
        "id": 4,
        "title": "Sagra",
        "date": "21-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
    },
    {
        "id": 5,
        "title": "Watergun",
        "date": "23-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
    },
    {
        "id": 6,
        "title": "Riviera",
        "date": "30-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
    }
]

// debugging
// console.table(photoData);

// Funzione per creare le card e inserirle nel DOM
function generateCards() {

    // Seleziono l'elemento con la classe "container-card"
    const container = document.querySelector('.container-card');

    // Itero sull'array di foto usando una funzione
    photoData.forEach(function(photo) {

        // creo un nuovo elemento e gli aggiungo una classe
        const card = document.createElement('div');
        card.classList.add('card');

        // Container dell'immagine
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('container-img')

        // Creo l'elemento <img> dinamicamente aggiungendolo al DOM
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.title;
        imgContainer.appendChild(img);

        // Aggiunta del pin
        const pin = document.createElement('img');
        pin.src = './IMG/pin.svg';
        pin.alt = 'Pin';
        pin.classList.add('pin');
        imgContainer.appendChild(pin);

        // Contenuto del testo
        const content = document.createElement('div');
        content.classList.add('content');

        // Inserimento della "data"
        const date = document.createElement('span');
        date.textContent = photo.date;

        // Inserimento del titolo della foto
        const title = document.createElement('h2');
        title.textContent = photo.title;

        // Aggiunta della data e del titolo(h2) al contenuto
        content.appendChild(date);
        content.appendChild(title);

        // Aggiunta dell'immagine e del testo alla card
        card.appendChild(imgContainer);
        card.appendChild(content);

        // Aggiunta della card al contenitore del main
        container.appendChild(card);

    });

}

// Chiamata della funzione per generare le card
generateCards();