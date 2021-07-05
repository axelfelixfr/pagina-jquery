$(document).ready(function(){
    var btnVolverArriba = $('#btnVolverArriba');

    // Ejecutamos la función cada vez que se hace scroll
    $(window).on('scroll', function(){
        // A la variable proyectosOffsetTop le pasamos la altura que hay entre el header hasta la sección '#proyectos'
        var proyectosOffsetTop = $('#conoce').offset().top;

        // Con la función scrollTop() sabremos en que apartado esta el scroll (su altura)
        if($(window).scrollTop() >= proyectosOffsetTop){
            // Si el scroll es mayor que la altura que tiene la variable entonces ejecutara la siguiente función
            btnVolverArriba.css('margin-right', 0); // Se le agrega un margin-right de 0 para que aparezca el btnVolverArriba
        
        } else if($(window).scrollTop() <= proyectosOffsetTop/2){
            // Cuando el scroll este a la mitad de la caja entonces ejecutara la siguiente función
            btnVolverArriba.css('margin-right', '-60px'); // Se le agrega un margin-right de -60px para que desaparezca el btnVolverArriba
        }
    });

    // Movimiento suave de scroll de "Inicio" y "Volver arriba"
    // Seleccionamos los enlaces (<a></a>) con la clase "volver-arriba"
    $('a.volver-arriba').on('click', function(e){
        // Detenemos la acción por defecto de los enlaces con preventDefault();
        e.preventDefault();

        // Si el scrollTop es diferente a 0 entonces podra pasar la condición
        if($(window).scrollTop() != 0){
            // Si el scroll esta abajo del tope de la ventana entonces ejecutara este código
            $('html, body').stop().animate({scrollTop: 0}, 1000); // Volvera al tope de la ventana con 'scrollTop: 0', y tardara 1 segundo
            // Con el stop() detiene una animación que ya este en curso para que no tenga que terminarla y me lleve a la nueva
        }
    });

    // Movimiento suave de scroll de los demás items del menú principal
    // Seleccionamos los enlaces (<a></a>) con la clase "scroll-suave"
    $('a.scroll-suave').on('click', function(e){
        // Detenemos la acción por defecto de los enlaces con preventDefault();
        e.preventDefault();
        
        // Con el elemento this seleccionamos cualquier elemento al que se le de click (con enlaces (<a></a>) con la clase "scroll-suave")
        var seccionOffsetTop = $($(this).attr('href')).offset().top; // Seleccionamos el href del elemento al que se le dio click
                            // $('#proyectos') --> Esto es lo que arrojaria la selección

        // Con offset().top obtenemos la altura del tope hasta el elemento que se dio click

        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
        // Con el stop() detiene una animación que ya este en curso para que no tenga que terminarla y me lleve a la nueva
    });

    // Seleccionamos los enlaces (<a></a>) con la clase "scroll-acercaDe"
    $('a.scroll-acercaDe').on('click', function(e){
        // Detenemos la acción por defecto de los enlaces con preventDefault();
        e.preventDefault();
        
        // Con el elemento this seleccionamos cualquier elemento al que se le de click (con enlaces (<a></a>) con la clase "scroll-suave")
        var seccionOffsetTop = $($(this).attr('href')).offset().top - 122; // Seleccionamos el href del elemento al que se le dio click
                            // $('#acercaDe') --> Esto es lo que arrojaria la selección
        // Le restamos 122px ya que el menú header tapa el contenido del contenedor acerca de

        // Con offset().top obtenemos la altura del tope hasta el elemento que se dio click

        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
        // Con el stop() detiene una animación que ya este en curso para que no tenga que terminarla y me lleve a la nueva
    });

    // Seleccionamos los enlaces (<a></a>) con la clase "scroll-equipo"
    $('a.scroll-equipo').on('click', function(e){
        // Detenemos la acción por defecto de los enlaces con preventDefault();
        e.preventDefault();
        
        // Con el elemento this seleccionamos cualquier elemento al que se le de click (con enlaces (<a></a>) con la clase "scroll-suave")
        var seccionOffsetTop = $($(this).attr('href')).offset().top - 68; // Seleccionamos el href del elemento al que se le dio click
                            // $('#equipo') --> Esto es lo que arrojaria la selección
        // Le restamos 68px (es lo que mide el header) ya que el menú header tapa el contenido del contenedor equipo
        
        // Con offset().top obtenemos la altura del tope hasta el elemento que se dio click

        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
        // Con el stop() detiene una animación que ya este en curso para que no tenga que terminarla y me lleve a la nueva
    });
});