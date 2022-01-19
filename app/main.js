//----REVISTA JSON-------


// Pintar artículos a partir del JSON

let datos;

let mostrarDetalle = (e) => {
    window.open(`pages/articulo.html?id=${e.currentTarget.id}`,'_self');
}

let publicidad = (e) => {
    window.open(`https://ffshop.lzf-lamps.com//`,'_blank');
}

let ilustra = (e) => {
    window.open(`index.html`,'_self');
}


fetch('assets/data/data.json')
.then(r=>r.json())
.then(data=>{
    datos = data;
    let lista=document.querySelector("#noticias");
    data.forEach((user, index) => {
        let item=`<a href="#" id="${index}" class="modulo ${user.ancho} ${user.cel} ${user.color} ${user.margen} mod-${index+1}">
        <h1 class="${user.tamano}">${user.titulo}</h1></a>`;
        lista.innerHTML+=item;
    })
})  
.then(() => {
    let captura = document.querySelectorAll(".modulo");
    captura.forEach(captura => {

        switch (captura.id) {
            case "1":
                captura.addEventListener("click", ilustra);
                break;
            
            case "3":
                captura.addEventListener("click", ilustra);
                break;
            case "4":
                captura.addEventListener("click", publicidad);
                break;
            default:
                captura.addEventListener("click", mostrarDetalle)
        }
       
    })
})


//Mi primer menú hamburgesa chispas


let burger = document.querySelector(".hamburger_menu");

burger.addEventListener('click', (b) => {
let muestra = document.querySelector(".menu");
muestra.classList.toggle(`ocultar`)
})






