function barajaTarjetas(lasTarjetas) {

    var resultado;
    var totalTarjetas = lasTarjetas.concat(lasTarjetas); // Duplicar tarjetas

    resultado = totalTarjetas.sort(function() { // sort aplica una ordenación en Unicode
        return 0.5 - Math.random(); // POR ACLARAR 
        // return devuelve un valor y hace salir de la función
    });

    console.log(resultado);

    return resultado; // Se detiene la ejecución de la función
}

function reparteTarjetas(lasTarjetas) {

    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas(lasTarjetas);

    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(function(elemento) {
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML = 
            "<div class='tarjeta' data-valor=" +
                elemento +
                ">" +
                "<div class='tarjeta__contenido'>" +
                elemento +
                "</div>"
            "</div>";

        mesa.appendChild(tarjeta);
    });
}