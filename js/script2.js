<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Redirige a proyecto1.html al hacer clic en el GIF con id 'gif1'
        document.getElementById('gif1').addEventListener('click', function() {
            window.location.href = 'pagina3.html'; // Ruta relativa al archivo HTML
        });

        // Redirige a proyecto2.html al hacer clic en el GIF con id 'gif2'
        document.getElementById('gif2').addEventListener('click', function() {
            window.location.href = 'proyecto2.html'; // Ruta relativa al archivo HTML
        });
    });
</script>
