$(document).ready(function(){
    var banner = $('#banner');

    // Definir altura dinámica para el banner
    function alturaBanner(){

        // Seleccionamos el objeto window y obtenemos su altura con la función height()
        var vpaltura = $(window).height();

        // A la variable banner que contiene la caja del banner le agregamos la propiedad de CSS 'height'
        // La cual se le agrega con el valor de la variable vpaltura la altura que tiene
        banner.css('height', vpaltura);
    }

    // Ejecutamos la función
    alturaBanner();

    // Al objeto window le agregamos la función resize() que sirve para redimensionar la ventana
    // y le agregamos la función que calcula la altura
    $(window).resize(alturaBanner);
});