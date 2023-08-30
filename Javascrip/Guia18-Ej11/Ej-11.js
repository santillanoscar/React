
function detectarPalabraMasLarga() {
    const palabraAEvaluar = document.getElementById("palabra").value;
    const ObtenerPalabraMasLarga = palabraMasLarga(palabraAEvaluar);
    document.getElementById("palabraMasLarga").value = ObtenerPalabraMasLarga;
}


function palabraMasLarga(cadena) {
    const palabras = cadena.split(" ");

    let palabraMasLarga = "";

    for (let i = 0; i < palabras.length; i++) {
        const palabraActual = palabras[i];

        if (palabraActual.length > palabraMasLarga.length) {
            palabraMasLarga = palabraActual;
        }
    }
    return palabraMasLarga;

}

