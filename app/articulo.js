/**URL que pinta el artículo */

let obtenerParam = (url) => {
    let urlParam = String(url.match(/\?+.+/));
    urlParam = urlParam.replace("?id=", "");
    return urlParam;
}

let param = obtenerParam(document.URL);


fetch('../assets/data/data.json')
    .then(res => res.json())
    .then(data => {
        let user = data[Number(param)]
        
        let articulo_tipo = document.querySelector(".articulo");
        articulo_tipo.innerHTML =`<div class="titulo_seccion">ARTÍCULOS</div>
                <h1 class="titulo_articulo titulo_h2 margen_ancho">${user.titulo}</h1>
                <img class="ilustracion" src=${user.ilustracion_A} alt="${user.accesible_A}">
                <p class="firma">por <span class="negrita">${user.autor} /</span>${user.fecha} ${user.hora}</p>
                <p class="parrafo parr_01">${user.parrafo_01}</p>
                <div class="corte">
                    <img class="ilustracion" src=${user.ilustracion_B}  alt="${user.accesible_B}">
                    <div class="corte_para_textos">
                        <div class="destacado margen_estrecho">${user.destacado}</div>
                        <div class="pie  ${user.margen_pie} desordena">${user.pie}</div>
                    </div>
                </div>
                <p class="parrafo parr_02">${user.parrafo_02}</p>
        `;
    })



//Mi primer menú hamburgesa chispas


let burger = document.querySelector(".hamburger_menu");

burger.addEventListener('click', (b) => {
let muestra = document.querySelector(".menu");
muestra.classList.toggle(`ocultar`)
})
