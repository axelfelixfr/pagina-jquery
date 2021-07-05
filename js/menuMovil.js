$(document).ready(function(){
    var numero = 1;

    // Al boton con el id 'btnMenu' le agregamos el evento click para que ejecute esta función
    $('#btnMenu').on('click', function(e) {
        // Elimina la acción por defecto
        e.preventDefault();

        // Si el numero es igual a 1 entonces ejecuta la animación
        if(numero == 1){
            // Le agregara al menu-mobile un left: 0 para que aparezca el menú
            $('.menu-mobile .menu-principal').animate({left: 0}, 300, function(){
                // Al momento de hacer la animación también agrega un callback al cambiar el numero a 0
                numero = 0;
            });

        } else {
            // Le agregara al menu-mobile un left de -100 para que desaparezca el menú
            $('.menu-mobile .menu-principal').animate({left: '-100%'}, 300, function() {
                // Al momento de hacer la animación nuevamente pone el numero en 1 para que se pueda activar nuevamente
                numero = 1;
            });
        }
    });

    // Agregamos el mismo efecto a los enlaces del menu para que cuando se hagan click en alguno también se oculte el menú también
    $('.menu-mobile .menu-principal a').on('click', function(){
        // Hace el mismo efecto que con el boton para ocultar el menú
        $('.menu-mobile .menu-principal').animate({left: '-100%'}, 300, function() {
            numero = 1;
        });
    });
});