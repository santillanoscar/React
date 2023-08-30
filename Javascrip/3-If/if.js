/*
IF
El condicional if es un condicional lógico que evalúa el camino a tomar en base a la 
evaluación de una condición. Supongamos el siguiente ejemplo, mi sobrino quiere subirse 
a una montaña rusa, pero para ello tiene que aprobar las dos siguiente condiciones: tener 
mas de 18 años y medir mas de 160 cm. La evaluación de esas dos condiciones da por 
verdadero se podrá subir de lo contrario no podrá.
*/
function evaluarAcceso() {

    let edad = parseInt(prompt("Ingrese su Edad "));
    let altura = parseInt(prompt("Ingrese su Altura en cm "));
    var resultadoEdad = document.getElementById("resultadoJuego");

    if (edad >= 18 && altura >= 160) {
        resultadoEdad.innerHTML = "<b>Puedes subir</b>";
    } else {
        resultadoEdad.innerHTML = "<b>No puedes subir</b>";
    }
}
/*
Como se puede ver, si la condición a evaluar se cumple, es decir, da verdadero, mostrara el 
mensaje “Puedes subirte :D”, en caso que de falso mostrara “No te puedes subir ”. Por otra 
parte, JavaScript permite también agregar la condición else if
*/

function comparar() {
    
    var numero = parseInt(prompt("Ingrese un número para comparar con 10"));
    var resultadoComparacion = document.getElementById("resultadoComparacion");
    
    if (numero > 10) {
        resultadoComparacion.innerHTML = numero + " <b>es mayor que 10</b>";
    } else if (numero < 10) {
        resultadoComparacion.innerHTML = numero +  " <b>es menor que 10</b>";
    } else {
        resultadoComparacion.innerHTML = numero + " <b>es igual a 10</b>";
    }
}

/*
IF TERNARIO
El if ternario nos permite resolver en una línea una expresión lógica asignando un valor. 
Proviene del lenguaje C, donde se escriben muy pocas líneas de código y donde cuanto 
menos escribamos más elegantes seremos. Este operador es un claro ejemplo de ahorro 
de líneas y caracteres al escribir los scripts. Lo veremos rápidamente, pues la única razón 
que lo veamos es para que sepan que existe y si lo encuentran en alguna ocasión sepan
identificarlo y cómo funciona. 
Variable = (condición) ? valor1 : valor2
Este ejemplo no sólo realiza una comparación de valores, además asigna un valor a una 
variable. Lo que hace es evaluar la condición (colocada entre paréntesis) y si es positiva 
asigna el valor1 a la variable y en caso contrario le asigna el valor2. Veamos un ejemplo:
*/
function hora(){

let hora_actual = parseInt(prompt(" Ingrese una hora del dia"));
var resultadoHora = document.getElementById("hora")

resultadoHora.innerHTML = (hora_actual < 12) ?  "Antes del mediodía" : "Después del mediodía";

}


