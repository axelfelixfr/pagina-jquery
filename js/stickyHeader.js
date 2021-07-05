$(document).ready(function(){
    var fixedHeader = $('#fixedHeader');

    // Ejecutamos la función cada vez que se hace scroll
    $(window).on('scroll', function(){
        // A la variable proyectosOffsetTop le pasamos la altura que hay entre el header hasta la sección '#proyectos'
        var proyectosOffsetTop = $('#conoce').offset().top;

        // Con la función scrollTop() sabremos en que apartado esta el scroll (su altura)
        if($(window).scrollTop() >= proyectosOffsetTop){
            // Si el scroll es mayor que la altura que tiene la variable entonces ejecutara la siguiente función
            fixedHeader.css('margin-top', 0); // Se le agrega un margin-top de 0 para que aparezca el fixedHeader
        
        } else if($(window).scrollTop() <= proyectosOffsetTop/2){
            // Cuando el scroll este a la mitad de la caja entonces ejecutara la siguiente función
            fixedHeader.css('margin-top', '-68px'); // Se le agrega un margin-top de -68px para que desaparezca el fixedHeader
        }
    });
});