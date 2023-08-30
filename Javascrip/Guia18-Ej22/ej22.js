let contador = 0;

function miFuncion() {
    
    if (contador == 0) {
        document.getElementById("mensaje").innerHTML = `<br><b>Hiciste click ${contador + 1} vez correctamente</b>`;
    } else {
        document.getElementById("mensaje").innerHTML = `<br><b>Hiciste click ${contador + 1} veces correctamente</b>`;
    }
    contador++;
}

function borrar() {
    document.getElementById("mensaje").innerHTML = "";
    contador = 0;
}