window.addEventListener('resize', ajusteAncho());
window.addEventListener('DOMContentLoaded', ajusteAncho());

function ajusteAncho() {
    navegador = document.getElementById('navegador');
    banner = document.getElementById('contenedor-banner');

    navegador.style.width = banner.offsetWidth + 'px';
}

let contenedores = document.querySelectorAll('.contenedorInicio');


let categoria = document.getElementsByClassName('contenedorHijo');

let contenedorGrande = document.getElementById('contenedorGrande');

let boton = document.getElementById('botonCerrar');

let imagenGrande = document.getElementById('imagenGrande');

for (let i = 0; i < categoria.length; i++) {
    categoria[i].addEventListener("click", () => {
        contenedorGrande.style.display = 'flex';
        let idImagen = categoria[i].getAttribute('nombre');
        imagenGrande.src = idImagen      
    });
}

boton.addEventListener('click', () => {
    contenedorGrande.style.display = 'none';
})
