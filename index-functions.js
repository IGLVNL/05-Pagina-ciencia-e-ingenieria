
/*Metodo buscador*/
if(document.getElementById("searchInput")){
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");
    
    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        var searchTerm = searchInput.value;
        performSearch(searchTerm);
        mostrarResultados();
    });

    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            var searchTerm = searchInput.value;
            performSearch(searchTerm);
            mostrarResultados();
        }
    });

    function performSearch(searchTerm) {
        var fileUrls = ['A_00_main.html','B_00_procesos_industriales.html','C_00_diseño de layout.html','C_01_Sistema de tolerancias.html','C_02_Instrumentos de medicion.html','C_03_Control estadistico de proceso.html','C_04_Proceso productivo-Hoja de ruta.html','C_05_MSAV.html','C_06_MCAV.html','C_07_CNC.html','C_08_Industria alimenticia.html','C_09_Recubrimientos.html','C_10_Industrias petroquimicas.html'];
        searchResults.innerHTML = '';
        var filesProcessed = 0;

        fileUrls.forEach(function(url) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = function() {
            if (xhr.status === 200) {
                var htmlContent = xhr.responseText;
                searchInHTML(htmlContent, searchTerm, url);
            }
            filesProcessed++;
            if (filesProcessed === fileUrls.length) {
                if (searchResults.children.length === 0) {
                    var noResultsMessage = document.createElement('p');
                    noResultsMessage.textContent = 'No hay resultados';
                    searchResults.appendChild(noResultsMessage);
                }
                mostrarResultados();
                }
            };
            xhr.send();
        });
    }

    function mostrarResultados() {
        var elemento = document.getElementById('searchResults');
        var input = document.getElementById('searchInput');
        var rect = input.getBoundingClientRect();
        elemento.style.top = (rect.bottom + window.scrollY) + 'px';
        elemento.style.left = (rect.left + window.scrollX) + 'px';
        elemento.style.display = 'flex';
        elemento.style.width = 'fit-content';
        elemento.style.maxHeight = '100vh';
        elemento.style.overflowY = 'scroll';
        elemento.style.borderRadius = '7.5px';
        elemento.style.padding = '1%';
    }

    function searchInHTML(htmlContent, searchTerm, url) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(htmlContent, "text/html");
        var elements = doc.querySelectorAll("h1, h2, .pregunta, .materias-principal");
        var regex = new RegExp(searchTerm.toLowerCase().replace(/\s/g, ''), 'gi');
        elements.forEach(function(element) {
            if (element.textContent.toLowerCase().replace(/\s/g, '').match(regex)) {
                var id = element.id || element.textContent.replace(/\s/g, '_');
                element.id = id;
                var link = document.createElement('a');
                link.href = url + '#' + id;
                link.textContent = element.textContent;
                searchResults.appendChild(link);
            }
        });
    }

    document.addEventListener("click", function(event) {
        if (event.target !== searchButton && event.target !== searchInput) {
            searchResults.style.display = 'none';
            searchResults.style.padding = '0%';
        }
    });
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
