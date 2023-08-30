// Esto agrega a la pantalla el valor del boton de la calculadora que toquemos
function agregar(valor){
    document.getElementById("pantalla").value += valor

}

//esta accion vacia la pantalla
function borrar(){
    document.getElementById("pantalla").value = ""
}

// esta accion realiza el calculo
function calcular(){
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}