window.addEventListener('resize', ajusteAncho());
window.addEventListener('DOMContentLoaded', ajusteAncho());

function ajusteAncho() {
    navegador = document.getElementById('navegador');
    banner = document.getElementById('contenedor-banner');

    navegador.style.width = banner.offsetWidth + 'px';
}

let contenedores = document.querySelectorAll('.contenedorInicio');

contenedores.forEach(contenedor => {
    contenedor.addEventListener('click', () => {
        let direccion = contenedor.id;
        window.open(direccion+'.html', '_blank')
    }
)}
)


