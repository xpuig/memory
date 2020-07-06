function iniciaCronometro() {
    var segundos = 0;
    var minutos = 0;

    function actualizaContador() {
        segundos++;
        if(segundos > 59) {
            segundos = 00;
            minutos++;
        }

        segundosTexto = segundos;
        minutosTexto = minutos;

        if (minutosTexto < 10) {
            minutosTexto = "0" + minutos;
        }

        if (segundosTexto < 10) {
            segundosTexto = "0" + segundos;
        }

        document.querySelector("#minutos").innerText = minutosTexto;
        document.querySelector("#segundos").innerText = segundosTexto;
    }
    setInterval(actualizaContador, 1000);
}