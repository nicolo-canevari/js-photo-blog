// array oggetti
// const photoData = [
//     {
//         "id": 1,
//         "title": "Skate Park",
//         "date": "01-07-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
//     },
//     {
//         "id": 2,
//         "title": "Passeggiata",
//         "date": "16-07-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
//     },
//     {
//         "id": 3,
//         "title": "Alpi",
//         "date": "01-07-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
//     },
//     {
//         "id": 4,
//         "title": "Sagra",
//         "date": "21-08-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
//     },
//     {
//         "id": 5,
//         "title": "Watergun",
//         "date": "23-08-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
//     },
//     {
//         "id": 6,
//         "title": "Riviera",
//         "date": "30-08-2024",
//         "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
//     }
// ]

// debugging
// console.table(photoData);

// Funzione per ottenere i dati tramite axios e generare le card
function fetchPhotos() {

    // URL dell'API da cui otteniamo i dati
    const apiUrl = "https://lanciweb.github.io/demo/api/pictures/";


    // Uso di axios per ottenere i dati attraverso il metodo GET
    axios.get(apiUrl)
        .then(function (response) {

            // Quando la richiesta è riuscita, i dati sono nella proprietà "data" della risposta
            const photoData = response.data;

            // Chiamo la funzione per generare le card con i dati ottenuti
            generateCards(photoData);

        })

        .catch(function (error) {

            // Stampo in console in caso di errore
            console.error("Errore nel caricamento dei dati:", error);

        });

}


// Funzione per creare le card e inserirle nel DOM 
// Se voglio attingere gli oggetti da un array basta fare generateCards()
function generateCards(photoData) {

    // Seleziono l'elemento con la classe "container-card"
    const container = document.querySelector('.container-card');

    // Itero sull'array di foto usando una funzione
    photoData.forEach(function (photo) {

        // Destructuring degli oggetti all'interno di photoData
        // photoData.forEach(function ({ url, title, date }) {

        // Inserimento della card nell'html usando inner.HTML
        // const cardHTML = `
        //     <div class="card">
        //         <div class="container-img">
        //           <img src="${photo.url}" alt="${photo.title}">
        //           <img src="./IMG/pin.svg" alt="Pin" class="pin">
        //         </div>
        //         <div class="content">
        //           <span>${photo.date}</span>
        //           <h2>${photo.title}</h2>
        //         </div>
        //     </div>
        // `;

        // Aggiungo la card al contenitore
        // container.innerHTML += cardHTML;

        // Creo un nuovo elemento e gli aggiungo una classe
        const card = document.createElement('div');
        card.classList.add('card');

        // Container dell'immagine
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('container-img')

        // Creo l'elemento <img> dinamicamente aggiungendolo al DOM
        const img = document.createElement('img');
        // Imposto l'URL dell'immagine
        img.src = photo.url;
        // Imposto il testo alternativo per l'immagine
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

        // Aggiungo l'evento di click sull'immagine
        img.addEventListener('click', function () {

            showFullscreenImage(photo.url);

        });

        // Aggiunta della card al contenitore del main
        container.appendChild(card);

    });

}

// Funzione per visualizzare l'immagine a schermo intero
function showFullscreenImage(url) {

    // Creo l'overlay per il fullscreen
    const overlay = document.createElement('div');
    overlay.classList.add('fullscreen-overlay');

    // Creo il contenitore dell'immagine fullscreen
    const fullscreenImgContainer = document.createElement('div');
    fullscreenImgContainer.classList.add('fullscreen-image');

    // Creo l'elemento immagine
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Fullscreen Image';

    // Aggiungo l'immagine al suo contenitore
    fullscreenImgContainer.appendChild(img);

    // Creo la X per chiudere l'immagine
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('fullscreen-close');
    closeBtn.textContent = 'X';

    // Funzione per chiudere l'overlay
    closeBtn.addEventListener('click', function () {

        closeFullscreen(overlay);

    });

    // Aggiungo la X al contenitore dell'immagine
    fullscreenImgContainer.appendChild(closeBtn);

    // Aggiungo l'immagine e l'overlay al body
    overlay.appendChild(fullscreenImgContainer);
    document.body.appendChild(overlay);

}

// Funzione per chiudere l'immagine a schermo intero
function closeFullscreen(overlay) {

    // Aggiungo la classe "hidden" all'overlay
    overlay.classList.add('hidden');

}

// Chiamata della funzione per generare le card
// generateCards();

// Chiamata della funzione per ottenere le foto dal server e generare le card
fetchPhotos();