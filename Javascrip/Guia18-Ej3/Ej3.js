function esMayor(){
const edadObtenida = parseInt(document.getElementById("edad").value);
if (edadObtenida >= 18) {
     document.getElementById("resultado").innerHTML = "<br/><h4>Si, Es mayor de edad<h4>" 
}else{
     document.getElementById("resultado").innerHTML = "<br/><h4>No, no es mayor de edad<h4>"
}
}

function borrar(){
    document.getElementById("edad").value = "";
    document.getElementById("resultado").innerHTML = "";

}