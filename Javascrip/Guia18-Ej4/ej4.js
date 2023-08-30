function esCorrecto(){
    let letraObtenida = document.getElementById("letra").value.toUpperCase();
        
    if (letraObtenida === "S" || letraObtenida === "N" ) {
        document.getElementById("resultado").innerHTML = "<br/><h4>ES CORRECTO<h4>" 
   }else{
        document.getElementById("resultado").innerHTML = "<br/><h4>ES INCORRECTO<h4>"
   }
}

function borrar(){
    document.getElementById("letra").value= "";
    document.getElementById("resultado").innerText = "";
}