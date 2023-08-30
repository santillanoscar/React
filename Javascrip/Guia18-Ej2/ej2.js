const calculoArea = (radio) => {
    return Math.PI * Math.pow(radio,2);
}

const calculoPerimetro = (radio) => {
    return 2 * Math.PI * radio;
}

function obtenerArea(){
    let radio = parseFloat(document.getElementById("radio").value);
    let area = calculoArea(radio);
    document.getElementById("area").innerHTML = `El area de la circunferencia es: ${area.toFixed(2)}`;
}

function obtenerPerimetro(){
    let radio = parseFloat(document.getElementById("radio").value);
    let perimetro = calculoPerimetro(radio);
    document.getElementById("perimetro").innerHTML = `El perimetro de la circunferencia es: ${perimetro.toFixed(2)}`;
}

function borrar(){
    document.getElementById("radio").value = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("perimetro").innerHTML = "";
}