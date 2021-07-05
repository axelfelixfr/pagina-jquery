$(document).ready(function () {

    // Creamos el evento click a la imagenes con la clase "imagen-proyecto"
    $('.imagen-proyecto').on('click', function() {

        // Almacenamos su atributo src de la imagen que se selecciono en una variable
        var rutaImagen = $(this).attr('src');

        // Creamos el modal y le concatenamos la variable de la ruta para hacer el modal dinámico
        var modal = `<div class="modal" id="modal">
                        <img src="${rutaImagen}" alt="">
                        <div class="btn-cerrar" id="btnCerrar">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>`

        // Seleccionamos la caja con id 'conoce' y le agregamos el modal que creamos después
        $('#conoce').after(modal);

        // Seleccionamos el boton cerrar y le agregamos un evento click
        $('#btnCerrar').on('click', function() {
            // Si se da click se remueve el modal
            $('#modal').remove();
        });
        
    });
    
    $(document).on('keyup', function (e) {
        // La tecla ESC es igual a 27 en código ASCII
        // La propiedad which detecta que tecla se presiono
        if(e.which==27){
            // Si se presiona ESC se remueve el modal de igual forma
            $('#modal').remove();
        }
    })
});