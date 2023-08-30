
function ingresarNumeros() {
    let num;
    let suma = 0;
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    let contador = 0;
    let numeros = [];

    do {
        num = parseInt(prompt(`Ingrese el ${contador+1}° numero (termina con 0)`));

        if (num !== 0) {
            contador++;
            suma += num;
            numeros.push(num);
            if (num > max) {
                max = num;
            }
            if (num < min) {
                min = num;
            }
        }

    } while (num !== 0);

    let prom = parseInt(suma / contador);

    document.getElementById("resultado").innerHTML = (`<br><br> <b>El numero maximo es ${max} <br>
    El numero minimo es ${min} <br>
    El promedio es ${prom} <br>
    Los numeros ingresados fueron [ ${numeros} ]</b> <br>`
)
}







