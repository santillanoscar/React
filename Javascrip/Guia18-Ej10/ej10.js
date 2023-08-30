


const invertir = (cadena) => cadena.split("").reverse().join('');

const invertirPalabra = () => {

    const palabra = document.getElementById("palabra").value;
    const palabraInvertida = invertir(palabra);
    document.getElementById("palabraInvertida").value = palabraInvertida;
    
    }
