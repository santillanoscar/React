// objetos windows

function abrir(){
    let ventana = open();
    ventana.document.write("Estoy escribiendo en una nueva ventana <br/>")
    ventana.document.write("Esta es la segunda linea")
}

function abrirConParametros(){
    let ventana = open('','','status=yes,width=400,height=400,menubar=yes');
    ventana.document.write("Esta es una ventana con parametros")
}

function mostrarAlerta(){
    alert(" Esta es una ventana de alerta");
}

function confirmar(){
    let respuesta= confirm(" Presione un boton ")
    if (respuesta == true) {
        alert("Usted presiono el boton ACEPTAR");
    } else {
        alert("Usted presiono el boton CANCELAR");
    }
}

function cargarCadena(){
    let cadena= prompt("Ingrese una cadena: ");
    alert("usted cargo la siguiente cadena: "+ "'"+ cadena+"'"); 
}
