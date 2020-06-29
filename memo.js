var grupoTarjetas = [ "🦁", "🦄", "🦊", "🐷", "🐙", "🐝", "🐘", "🐵", "🐯" ];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas); // Duplicar tarjetas

function barajaTarjetas() {

    var resultado;

    resultado = totalTarjetas.sort(function() { // sort aplica una ordenación en Unicode
        return 0.5 - Math.random(); // POR ACLARAR 
        // return devuelve un valor y hace salir de la función
    });

    console.log(resultado);

    return resultado; // Se detiene la ejecución de la función
}

function reparteTarjetas() {

    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas();

    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(function(elemento) {
        var tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        tarjeta.innerHTML = 
            "<div class='tarjeta__contenido'>" +
                elemento +
            "</div>";

        mesa.appendChild(tarjeta);
    });
}

function descubrir() {
    this.classList.add("descubierta");
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(
    function(elemento) {
        elemento.addEventListener("click", descubrir);
    }
);