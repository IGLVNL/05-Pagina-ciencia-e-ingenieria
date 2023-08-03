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





