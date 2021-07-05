$(document).ready(function(){
    // Seleccionamos elementos HTML en variables
    var slider = $('#slider');
    var btnAnterior = $('#btnAnterior');
    var btnSiguiente = $('#btnSiguiente');

    // Se pasa el último slide (imagen) al primer lugar
    $('#slider .slide:last').insertBefore('#slider .slide:first');
    // Con el método insertBefore() podemos insertar el último slide antes del primero

    // Con margen negativo se vuelve a mostrar el primer slide
    slider.css('margin-left', '-43%');

    // Función para que el slide se mueva a la derecha
    function moverDerecha() {
        // Si slider aun no tiene una animación entonces ejecuta el código
        if(!slider.is(':animated')){
            // Se crea una animación para hacer el slide lento
            slider.animate({
                marginLeft: '-105.6%'
            }, 700, function () {
                $('#slider .slide:first').insertAfter('#slider .slide:last');
                // Se coloca margin-left de '-43%' para volver a la posición original y ver la imagen principal
                slider.css('margin-left', '-43%');
                // Se limpia el intervalo en caso después de que se de click en el boton
                resetInterval();
            });
        }
    }

    // Se hace un evento click cuando se presione el boton 'btnSiguiente'
    btnSiguiente.on('click', moverDerecha);

    // Función para que el slide se mueva a la izquierda
    function moverIzquierda() {
        // Si slider aun no tiene una animación entonces ejecuta el código
        if(!slider.is(':animated')){
            // Se selecciona el último slide y se traslada antes del primer slide
            $('#slider .slide:last').insertBefore('#slider .slide:first');
            // Se pone un margin-left de '-105.6%'
            slider.css('margin-left', '-105.6%');
            // Se crea una animación para hacer el slide lento
            slider.animate({
                // Se coloca margin-left de '-43%' para volver a la posición original y ver la imagen principal
                marginLeft: '-43%'
            }, 700, function(){
                // Se limpia el intervalo en caso después de que se de click en el boton
                resetInterval();
            });
        }
    }

    // Se hace un evento click cuando se presione el boton 'btnAnterior'
    btnAnterior.on('click', moverIzquierda);

    // Se almacena un intervalo con la función moverDerecha para que se active el slider de forma automática
    var intervalo = setInterval(moverDerecha, 5000);

    // La función resetInterval limpia el intervalo y lo comienza en caso de
    function resetInterval() {
        // Se limpia el intervalo con clearInterval()
        clearInterval(intervalo);
        // Se vuelve a comenzar el intervalo
        intervalo = setInterval(moverDerecha, 5000);
    }
});