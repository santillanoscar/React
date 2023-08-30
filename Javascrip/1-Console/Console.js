console.log("-------------  console log  ---------------------------")
console.log("STRING: abc");
console.log("NUMBER: " + 123);
console.log("ARRAY: " + [1,2,3,4]);

console.log("-------------  error ---------------------------");
console.error("Mensaje de error"); 

console.log("--------------- advertencia -------------------------");
console.warn("Mensaje de advertencia");

console.log("--------------- time / timeEnd -------------------------");
console.time("abc");

console.log(" hola. controla el tiempo: ");

console.timeEnd("abc");

console.log("-------------- table --------------------------");
console.table({'a':1,'b':2});

console.log("--------------- count -------------------------");
for(let i=0;i<5;i++){
    console.count(i);
   }

   console.log("--------------- console custom -------------------------");
   
const spacing = '10px'; 
const styles = `padding: ${spacing}; 
                background-color: black;
                color: yellow;
                font-style: italic;
                border: 1px solid black;
                font-size: 2em;`; 
 console.log('%cEGG', styles)

 console.log("--------------- CONSTANTES ( CONST ) -------------------------");

 const PI = 3.141592653589793;
 //PI = 3.14; // Esto dará un error
 //PI = PI + 10; // Esto también dará un error
 console.log(PI);
 console.log(PI + 10);

 console.log("--------------- TEMPLATES STRINGS -------------------------");

const nombre = "Juan";
const edad = 30;

// Usando template string para combinar variables dentro de una cadena
const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años. `;

console.log(mensaje);

