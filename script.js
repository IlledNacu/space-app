//API de la nasa
const url = "https://api.nasa.gov/planetary/apod?api_key=Qwne9kBCO3aWzKr0rVnGtx0jaWkeO2dn9Rr5Fqka&count=5";

//consumo de API
async function listaImagenes() {
    try {
        let fetchImagen = await fetch(url);
        let datosImagenes = await fetchImagen.json();
        
        console.log(datosImagenes);

        const card = document.querySelector("[data-ul]");
        datosImagenes.forEach(elemento => {
            const contenido = `<li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
                </li>`;
            card.innerHTML = card.innerHTML + contenido;
        })
    }
    catch(error) {
        console.log(error);
    }
}

listaImagenes();

/*function listaImagenes() {
    fetch(url)
        .then(response => response.json())//si la promesa retorna como resuelta
        .then(datosImagenes => {
            console.log(datosImagenes);
            const card = document.querySelector("[data-ul]");
            datosImagenes.forEach(elemento => {
                const contenido = `<li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
                </li>`;
                card.innerHTML = card.innerHTML + contenido;
            })
        })
        .catch(error => console.log(error))//si la promesa retorna como rechazada; va a agarrar el error y hacer algo con él
}

const solicitud = new Promise((resolve, reject) => {
    const response = "resolve";
    if (response == "resolve") {
        resolve("La promesa se cumplió");
    } else {
        reject("La promesa no se cumplió");
    }
});
console.log(solicitud);

listaImagenes();
*/