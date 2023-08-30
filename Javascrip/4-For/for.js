document.write("-------- ARRAY PRINCIPAL ----------<br>");
var nombres = ["Oscar", "Seba", "Tade", "Tobias", "Carina"];
document.write(nombres + "<br>");


document.write("<br>-------- FOR COMUN ----------<br>");
//SE PUEDE USAR CONTINUE y BREAK
// BREAK SALE DEL CICLO
// CONTINUE SALTA ESA ITERACION Y SIGUE ITERANDO LOS DEMAS

for (let i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + "<br>");

}

document.write("<br>-------- FOR EACH ----------<br>");

nombres.forEach(e => {
    document.write(e + "<br>");
});

document.write("<br>-------- FOR EACH resumido ----------<br>");
//NO SE PUEDE USAR CONTINUE NI BREAK
nombres.forEach(e => document.write(e + "<br>"));


document.write("<br>-------- FOR IN ----------<br>");
//SE PUEDE USAR CONTINUE y BREAK
// AGREGA LOS ELEMENTO QUE FUERON AGREGADOS LUEGO AL ARRAY
nombres.numero = 10 ;

for (const index in nombres) {
    document.write(nombres[index] + "<br>");
}

document.write("<br>-------- FOR OF ----------<br>");
//SE PUEDE USAR CONTINUE y BREAK
// NO AGREGA LOS ELEMENTO QUE FUERON AGREGADOS LUEGO AL ARRAY
nombres.numero = 10 ;

for (const aux of nombres) {
    if (aux === "Tade") {
        continue;
    }
    document.write(aux + "<br>");
}

document.write("<br>-------- LABEL ----------<br>");

/*Proporciona a una sentencia con un identificador al que se puede referir al usar las 
sentencias break o continue. Por ejemplo, puede usar una etiqueta para identificar un bucle, 
y entonces usar las sentencias break o continue para indicar si un programa debería 
interrumpir el bucle o continuar su ejecución.
label o etiqueta : sentencia
Ejemplo:
*/

exterior: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 4 && j == 4) {
            Document.write(i + j );
            Document.write("Vamos a cortar ambos for");
            break exterior;
        }
        Document.write(i + j + 10 * i);
    }
}
