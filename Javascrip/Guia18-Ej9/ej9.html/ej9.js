
function evaluarFrase(){
const fraseAEvaluar = document.getElementById("frase").value;
const fraseConEspacios = agregarEspacio(fraseAEvaluar);
document.getElementById("fraseConEspacio").value = fraseConEspacios;
}

function agregarEspacio(frase) {

   let cadena = "";

   for (let i = 0; i < frase.length; i++) {
      if (i !== frase.length) {
         cadena += frase.substring(i, i + 1) + " ";  
      }
     
   }
   return cadena;
}


