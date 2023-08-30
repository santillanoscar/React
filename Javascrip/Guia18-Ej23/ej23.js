let elementotexto = document.getElementById("textoAResaltar");

let texto = elementotexto.textContent;
// alert(texto);
texto = texto.split(" ");
// alert(texto);

for (let i = 0; i < texto.length; i++) {
    if (texto[i].length > 8) {
        //alert(texto[i]);
        texto[i] = "<span>" + texto[i] + "</span>";
    }
}

let texto2 = texto.join(" ");

elementotexto.innerHTML = texto2;
