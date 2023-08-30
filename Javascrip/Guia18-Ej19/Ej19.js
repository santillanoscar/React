/*
Realizar un programa en Java donde se creen dos arreglos: 
el primero será un arreglo A de 50 números reales
el segundo sera un arreglo B de 20 números reales.
El programa deberá inicializar el arreglo A con números aleatorios y 
mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el 
valor 0.5. 
Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado de 20.
*/

vectorA = [];
vectorB = [];

document.write("<br/> -----CREAR VECTOR A------ <br/>")
for (let i = 0; i < 50; i++) {
    let numAleatorio = Math.floor(Math.random() * 100) - 50;
    vectorA.push(numAleatorio);
}
//mostrar vector A
document.write(vectorA);
document.write("<br/>");

document.write("<br/> ---VECTOR A ORDENADO--- <br/>")
//mostrar vector A ordenado
document.write(vectorA.sort((a, b) => a - b));
document.write("<br/>");

document.write("<br/> --- CREAR VECTOR B --- <br/>")
for (let i = 0; i < 20; i++) {
    i < 10 ? vectorB[i] = vectorA[i] : vectorB[i] = 0.5;
}
//mostrar vector B
document.write(vectorB)



