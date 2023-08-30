function ingresarNumeros() {
   const cantidadObtenida = document.getElementById("cantidadNumeros").value;
   let num;
   let contador = 0;
   let suma = 0;
   do {
      num = parseInt(prompt(`Ingrese el ${contador + 1}° numero a sumar`))
      suma += num;
      contador++;
   } while (cantidadObtenida > suma);
   document.getElementById("resultado").innerHTML = `Ha llegado al limite, sumando ${contador} numeros`;
}

function borrar() {
   document.getElementById("cantidadNumeros").value = "";
   document.getElementById("resultado").innerHTML = "";
}

