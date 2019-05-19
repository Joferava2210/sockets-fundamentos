var socket = io();

//On es oara escuchar info
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Emits son para enviar info
socket.emit('enviarMensaje', {
    usuario: 'Felipe',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar Información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});