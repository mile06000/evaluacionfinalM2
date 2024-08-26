$(document).ready(function() {
    $('#image1').click(function() {
        $('#audioPlayer').show(); // Muestra el reproductor de audio
        $('#audio')[0].play();    // Reproduce el audio
    });

    $('#image2').click(function() {
        $('#textContainer1').show(); // Muestra el contenedor de texto
    });


    $('#image3').click(function() {
        $('#textContainer2').show(); // Muestra el contenedor de texto
    });
});