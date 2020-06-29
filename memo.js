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

function descubrir() {
    var descubiertas;
    var totalDescubiertas = document.querySelectorAll(".descubierta");
    
    if(totalDescubiertas.length > 1) {
        return;
    }

    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta");

    if(descubiertas.length < 2) {
        return;
    }

    if(descubiertas[0].dataset.valor === descubiertas[1].dataset.valor) {
        console.log("Acierto");
    }else{
        console.log("Error");
    }

}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(
    function(elemento) {
        elemento.addEventListener("click", descubrir);
    }
);