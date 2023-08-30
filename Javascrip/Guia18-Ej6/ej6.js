//Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. 
//En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. 

/*
let num = parseInt(prompt(" Ingrese un numero: "));
console.log( typeof num);

if (num == 0) {
    alert(" ES UN CERO, no es par ni impar")
    
} else {
 (num % 2 == 0) ? (alert("Es PAR")) : (alert(" NO ES PAR")); 

}
*/

function esPar(){
    const numObtenido = document.getElementById("numero").value;
    if (numObtenido % 2 === 0) {
        document.getElementById("resultado").innerHTML = "<br/><h4>ES PAR<h4>" 
   }else{
        document.getElementById("resultado").innerHTML = "<br/><h4>ES IMPAR<h4>"
   }
}

function borrar(){
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}