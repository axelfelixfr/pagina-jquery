$(document).ready(function() {
    // Seleccionamos el formulario en una variable
    var formulario = $('#formulario');
    
    // Seleccionamos cada uno de los campos del formulario
    var nombre = $('#nombre');
    var email = $('#email');
    var mensaje = $('#mensaje');

    // Creamos una función que valide el nombre
    function validacionNombre(e) {
        // Si el campo esta vacio va a ejecutar este código
        if(nombre.val() == '' || nombre.val() == null){
            // Elimina la acción por defecto
            e.preventDefault();

            // Le agrega la clase error
            $('input[type="text"] + .error').css('display', 'block');
        } else {

            // Si no esta vacio entonces no aparece el mensaje de error
            $('input[type="text"] + .error').css('display', 'none');
        }
    }

    // Creamos una función que valide el email
    function validacionEmail(e) {
        // Si el campo esta vacio va a ejecutar este código
        if(email.val() == '' || email.val() == null){
            // Elimina la acción por defecto
            e.preventDefault();

            // Le agrega la clase error
            $('input[type="email"] + .error').css('display', 'block');
        } else {

            // Si no esta vacio entonces no aparece el mensaje de error
            $('input[type="email"] + .error').css('display', 'none');
        }
    }

    // Creamos una función que valide el mensaje
    function validacionMensaje(e) {
        // Si el campo esta vacio va a ejecutar este código
        if(mensaje.val() == '' || mensaje.val() == null){
            // Elimina la acción por defecto
            e.preventDefault();

            // Le agrega la clase error
            $('textarea + .error').css('display', 'block');
        } else {

            // Si no esta vacio entonces no aparece el mensaje de error
            $('textarea + .error').css('display', 'none');
        }
    }

    // La función validacion valida cada campo
    function validacion(e){
        validacionNombre(e);
        validacionEmail(e);
        validacionMensaje(e);
    }

    // Se ejecuta las validaciones una vez se trate de enviar el formulario
    formulario.on('submit', validacion);
});