
const url = "https://gutendex.com/books"
const contenido = document.querySelector(`.contenido`);

document.addEventListener(`DOMContentLoaded`, async () => {
    const response = await fetch(url);
    const { results } = await response.json();
    llenarContenido(results)
})


function llenarContenido(libros) {
    console.log(libros[0]);
    libros.forEach(el => {
        const nuevoElemento = document.createElement('div');
        nuevoElemento.classList.add(`contenido-libro`)
        nuevoElemento.innerHTML = ` 
            <h3>${el.authors[0].name}</h3>
            <p><span>${el.authors[0].birth_year}</span> - <span>${el.authors[0].death_year}</span></p>
            <img src=${el.formats[`image/jpeg`]} alt="foto">
            <a href=${el.formats["application/octet-stream"]}>descargar</a>
        `;

        const listaDeObras = el.bookshelves;
        let obras = ``;
        for (let i = 0; i < listaDeObras.length; i++) {
            obras += `<p>${listaDeObras[i]}</p>`
        }
        nuevoElemento.innerHTML += obras
        contenido.appendChild(nuevoElemento);
    });
}


