var arregloA = [];
var arregloB = [];

var verArregloA = document.getElementById("verArregloA");
var verArregloAOrdenado = document.getElementById("verArregloAOrdenado");
var verArregloB = document.getElementById("verArregloB");

for (let i = 0; i < 50; i++) {
    arregloA[i] = (Math.random()*100).toFixed(2);    
}

verArregloA.innerHTML = arregloA.join(" ; ");
//alert(arregloA);

arregloB = arregloA.sort().slice(0,10);

for (let i = 10; i < 20; i++) {
    arregloB[i] = 0.5;    
}

//alert(arregloB);


verArregloAOrdenado.innerHTML = arregloA.join(" ; ");
verArregloB.innerHTML = arregloB.join(" ; ");