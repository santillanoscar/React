/* 
Escribir una función flecha de JavaScript que reciba un argumento y
 retorne el tipo de dato.
*/

const tipoDato = (argumento) =>{
return typeof argumento
}

function evaluarTipoDato(){
    const datoAEvaluar = document.getElementById("ingresaCadena").value;
    const datoTipo = tipoDato(datoAEvaluar);
    document.getElementById("saleCadena").value = datoTipo;
}


/*
let cadena = document.getElementById("ingresaCadena").value;
document.getElementById("saleCadena").value = tipoDato(cadena);

document.write(tipoDato("hola"));
document.write("<br/>");
document.write(tipoDato(1));
document.write("<br/>");
document.write(tipoDato(true));
document.write("<br/>");
document.write(tipoDato());
document.write("<br/>");
document.write(tipoDato(null));
document.write("<br/>");
document.write(tipoDato([1,2,3]));
document.write("<br/>");
*/