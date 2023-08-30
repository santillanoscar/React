
//A partir del siguiente array: 
//var valores = [true, 5, false, "hola", "adios", 2]:
//a) Determinar cual de los dos elementos de texto es mayor
//b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
//operadores necesarios para obtener un resultado true y otro resultado false
//c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
//dos elementos numéricos

var valores = [true, 5, false, "hola", "adios", 2];


document.write("EJERCICIO 18 'A'<BR/>");

var aux = [];
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "string") {
        aux.push(valores[i]);
    }
}
document.write("Valores a comparar "+aux+"<br/>");

let resultado = (aux[0].length > aux[1].length) ? (`La palabra ${aux[0]} es más larga que ${aux[1]}`):(`La palabra ${aux[0]} es más larga que ${aux[1]}`)

document.write(resultado + "<br/>"); 
 


document.write("<br/> -------------------- <br/>")

document.write("EJERCICIO 18 'B'<BR/>");

aux.splice(0, aux.length);
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "boolean") {
        aux.push(valores[i]);
    }
}
document.write("Valores a comparar " + aux + "<br/>");
var resultadoTrue = aux[0] || aux[1];
var resultadoFalse =  aux[0] && aux[1];

document.write("Resultado Verdadero :" + resultadoTrue + "<br/>");
document.write("Resulado falso : "+ resultadoFalse + "<br/>" );


document.write("<br/> -------------------- <br/>")
document.write("EJERCICIO 18 'C'<BR/>");

aux.splice(0, aux.length);

for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] == "number") {
     aux.push(valores[i]);
    }
}

document.write("Valores a comparar " + aux + "<br/>");

document.write("Suma : " + (aux[0]+aux[1])+ "<br/>");
document.write("Resta : " + (aux[0]-aux[1])+ "<br/>");
document.write("Multiplicacion : " + (aux[0]*aux[1])+ "<br/>");
document.write("Division : " + (aux[0]/aux[1])+ "<br/>");