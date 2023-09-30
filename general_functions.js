
/*metodo para el desplazamiento rapido */
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}


/*Metodo donaciones y mails*/
document.getElementById("donaciones").onclick = function() {
    var cuadroDonacion = document.getElementById("CuadroDonacion");
    cuadroDonacion.style.display = 'flex';
};

document.getElementById("mail").onclick = function() {
    var cuadroMail = document.getElementById("CuadroMail");
    cuadroMail.style.display = 'flex';
};

document.body.onclick = function (event) {
    var cuadroDonacion = document.getElementById("CuadroDonacion");
    var cuadroMail = document.getElementById("CuadroMail");
    var cerrar1 = document.getElementById("cerrar1");
    var cerrar2 = document.getElementById("cerrar2");

    if (event.target == cerrar1) {
        cuadroDonacion.style.display = 'none';
    }

    if (event.target == cerrar2) {
        cuadroMail.style.display = 'none';
    }
};

/*Metodo ayuda*/
document.getElementById("help").onclick = function() {
    alert("Tips dentro de las secciones: \n" +
            "-Si queres ver una imagen con mayor detalle (hacerle zoom), podes hacerle click derecho a la imagen y" +
            " pones abrir imagen en nueva pestaña, ahi le vas a poder hacer zoom  \n" +
            "-Si queres imprimir alguna de las secciones de la pagina, tenes el boton de imprimir el documento entero" +
            "en tu impresora, o podes descargar la pagina entera en formato PDF \n" + "\n" +
            " Informacion adicional: \n"+ 
            "Esta es una guia de ayuda general para el uso de esta web: \n"+ 
            "1- Este sitio tiene una finalidad academica, de soporte para los interesados en estos temas.\n"+ 
            "2- Si te interesa contribuir con nosotros con conocimientos, experiencias, informacion, documentos, " + 
            "libros, criticas constructivas, o sugerencias de cualquier tipo, aca arriba tenes un " + 
            "boton para enviarnos un mensaje a los desarroladores. \n" + 
            "3- Cualquier problema, o peticion relacionada con el sitio y su contenido, seran evaluados " + 
            " y tenidos en cuenta en pos de la mejora continua de este proyecto.\n" + 
            "4- Si te gusta el material que suministramos, comparte el material con quienes lo necesiten, y si " +
            "queres apoyarnos economicamente, cualquier donacion o aporte nos motiva a seguir " +
            "compartiendo conocimiento de calidad. Tenes un boton aca arriba donde podes hacer tus donaciones.\n"
    );
}

/*metodo para imprimir */
if (document.getElementById("imprimir")) {
    document.getElementById("imprimir").onclick = function() {
        var elements = document.querySelectorAll("p , h2 , a , h1");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = '#000000';
        }
        window.print();
        window.location.reload();
    };
}

/*metodo para los menus superiores*/

let menu = document.getElementById("menu");
let temas = document.querySelectorAll("h2");
let listaPrincipal = document.createElement("ul");
listaPrincipal.style.flexDirection = "column";
listaPrincipal.id = "listaPrincipal";
listaPrincipal.className = "listas";
listaPrincipal.style.backgroundColor = "#333333";
listaPrincipal.style.padding = "10px 0px";
listaPrincipal.style.position = "absolute";
listaPrincipal.style.top = "0px";
listaPrincipal.style.left = "5vw";
listaPrincipal.style.overflowY = "auto";
listaPrincipal.style.maxHeight = "60vh";
listaPrincipal.style.width = "40vw";
listaPrincipal.style.display = "none";

menu.appendChild(listaPrincipal);

let listaSecundariaVisible = null;

temas.forEach(tema => {
    let elementoLista = document.createElement("li");
    let enlace = document.createElement("a");
    enlace.textContent = tema.textContent;
    enlace.style.textDecoration = "none";
    enlace.style.color = "white";
    enlace.href = "#" + tema.id;
    elementoLista.style.padding = "10px";
    elementoLista.id = tema.textContent + "_ListaPrincipal";
    elementoLista.appendChild(enlace);
    elementoLista.addEventListener("mouseover", function () {
        if (listaSecundariaVisible) {
            listaSecundariaVisible.style.display = "none";
        }
        let listaSecundariaCorrespondiente = document.getElementById(tema.textContent + "_ListaSecundaria");
        if (listaSecundariaCorrespondiente) {
            if(listaSecundariaCorrespondiente.childElementCount != 0){
                listaSecundariaCorrespondiente.style.display = "flex";
            } else {
                listaSecundariaCorrespondiente.style.display = "none";
            }
            listaSecundariaVisible = listaSecundariaCorrespondiente;
        }
    });
    elementoLista.addEventListener("click", function(event) {
        smoothScroll(event, tema.id);
        event.stopPropagation();
    });
    listaPrincipal.appendChild(elementoLista);
    let listaSecundariaCorrespondiente = document.createElement("ul");
    listaSecundariaCorrespondiente.id = tema.textContent + "_ListaSecundaria";
    listaSecundariaCorrespondiente.className = "listaSec";
    listaSecundariaCorrespondiente.style.flexDirection = "column";
    listaSecundariaCorrespondiente.style.backgroundColor = "#333333";
    listaSecundariaCorrespondiente.style.padding = "10px";
    listaSecundariaCorrespondiente.style.position = "absolute";
    listaSecundariaCorrespondiente.style.top = "0px";
    listaSecundariaCorrespondiente.style.left = "45vw";
    listaSecundariaCorrespondiente.style.overflowY = "auto";
    listaSecundariaCorrespondiente.style.maxHeight = "60vh";
    listaSecundariaCorrespondiente.style.width = "40vw";
    listaSecundariaCorrespondiente.style.display = "none";
    let contenedorTemas = tema.parentNode;
    let preguntas = contenedorTemas.querySelectorAll(".pregunta");
    Array.from(preguntas).forEach(Preg => {
        let elementoListaPreg = document.createElement("li");
        let enlacePreg = document.createElement("a");
        enlacePreg.textContent = Preg.textContent;
        enlacePreg.style.textDecoration = "none";
        enlacePreg.style.color = "white";
        enlacePreg.href = "#" + Preg.id;
        elementoListaPreg.style.padding = "10px";
        elementoListaPreg.appendChild(enlacePreg);
        listaSecundariaCorrespondiente.appendChild(elementoListaPreg);
        elementoListaPreg.addEventListener("click", function(event) {
            smoothScroll(event, Preg.id);
            event.stopPropagation();
        });
    });
    menu.appendChild(listaSecundariaCorrespondiente);
});

function closeLists() {
    listaPrincipal.style.display = "none";
    if (listaSecundariaVisible) {
        listaSecundariaVisible.style.display = "none";
        listaSecundariaVisible = null;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let menuImg = document.getElementById("menuImg");
    menuImg.addEventListener("click", function () {
        if (listaPrincipal.style.display == "none") {
            listaPrincipal.style.display = "flex";
        } else {
            listaPrincipal.style.display = "none";
            if (listaSecundariaVisible) {
                listaSecundariaVisible.style.display = "none";
                listaSecundariaVisible = null;
            }
        }
    });
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target)) { //verifica si no se hace click en un elemento target contenido en menu
            closeLists();
        }
    });
});

function updateListStyles(mediaQuery) {
    let listaPrincipal = document.getElementById("listaPrincipal");
    let listaSecundaria = document.querySelectorAll(".listaSec");
    if (mediaQuery.matches) {
        listaPrincipal.style.width = "90vw";
        listaSecundaria.forEach(function (lista) {
            lista.style.visibility = "hidden"
        });
    } else {
        listaPrincipal.style.width = "40vw";
        listaSecundaria.forEach(function (lista) {
            lista.style.visibility = "visible"
        });
    }
}

let mediaQuery = window.matchMedia("(max-width: 500px)");
updateListStyles(mediaQuery);
mediaQuery.addListener(updateListStyles);



//metodo para los botones principales

var contenedorSubtemas = document.getElementById("contenedor-subtemas");
var titulos = document.querySelectorAll("h2");
titulos.forEach(function(titulo, index) {
    var enlace = document.createElement("a");
    enlace.href = "#" + titulo.id; 
    enlace.className = "boton";
    var indice = (index + 1).toString().padStart(2, "0");
    enlace.textContent = indice + " - " + titulo.textContent.toUpperCase();
    enlace.onclick = function(event) {
        smoothScroll(event, this.getAttribute("href").substring(1));
    };
    contenedorSubtemas.appendChild(enlace);
});
