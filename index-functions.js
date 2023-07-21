
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
        var fileUrls = ['A_00_main.html','B_00_procesos_industriales.html','C_00_diseño de layout.html','C_01_Sistema de tolerancias.html','C_02_Instrumentos de medicion.html','C_03_Control estadistico de proceso.html','C_04_Proceso productivo-Hoja de ruta.html','C_05_MSAV.html','C_06_MCAV.html','C_07_CNC.html','C_08_Industria alimenticia.html','C_09_Recubrimientos.html',];
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

document.getElementById("donaciones").onclick = function() {
    alert("Si queres apoyar nuestro proyecto, podes hacer donaciones a esta cuenta \n " + 
    "CVU: XXXXXXXXXXXXXXXXX \n Alias: TORTUGA.SIGILOSA \n" + 
    "No olvides poner 'Donacion Web' como motivo de tu transferencia. \n" + 
    "Muchas gracias!!! ");
}


document.getElementById("help").onclick = function() {
    alert("Tips dentro de las secciones: \n" +
            "-Si queres ver una imagen con mayor detalle, o hacerle zoom, podes hacerle click derecho a la imagen y" +
            " pones abrir imagen en nueva pestaña, ahi le vas a poder hacer zoom  \n" +
            "-Si queres imprimir alguna de las secciones de la pagina, dale click derecho en el navegador, " +
            "y selecciona imprimir. Tene en cuenta que tambien podes guardar cualquier seccion en formato PDF " +
            "seleccionando la opcion imprimir PDF en vez de tu impresora (En el navegador MS-Edge) \n" + "\n" +
            " Informacion adicional: \n"+ 
            "Esta es una guia de ayuda general para el uso de esta web: \n"+ 
            "1- Este sitio tiene una finalidad academica, de soporte para los interesados en estos temas.\n"+ 
            "2- Si te interesa contribuir con nosotros con conocimientos, experiencias, informacion, documentos, " + 
            "libros, criticas constructivas, o sugerencias de cualquier tipo, aca arriba en el menu, tenes un " + 
            "boton con el Email de contacto de los desarrolladores. \n" + 
            "3- Cualquier problema, o peticion relacionada con el sitio y su contenido, seran evaluados " + 
            " y tenidos en cuenta en pos de la mejora continua.\n" + 
            "4- Si te gusta el material que suministramos, comparte el material con quien lo necesiten, y si " +
            "queres apoyarnos economicamente, cualquier donacion o aporte nos motiva a seguir " +
            "compartiendo conocimiento de calidad. Tenes un boton aca arriba donde que te explica como colaborar.\n"
        
    );
}




function mostrarContraseña() {
    // Hacer una solicitud AJAX al archivo PHP para obtener el valor del campo "pass"
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'backend/api.php', true); // La ruta al archivo PHP del backend
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Obtener el resultado de la respuesta JSON
                var response = JSON.parse(xhr.responseText);
                if (response.pass) {
                    // Mostrar el valor del campo "pass" en un alert
                    alert('El valor del campo "pass" es: ' + response.pass);
                } else {
                    // Mostrar un mensaje de error en caso de que no se encontraran registros
                    alert('No se encontraron registros');
                }
            } else {
                // Mostrar un mensaje de error en caso de que ocurriera un error en el servidor
                alert('Error al obtener el valor del campo "pass"');
            }
        }
    };
    xhr.send();
}
