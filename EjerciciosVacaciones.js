//Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.

console.log ("EJERCICIO 1 Bucle del 4 al 9 inclusive");

 for (let i = 4; i <= 9; i++){
    console.log(i);    
}
 
//Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.

console.log("\n" );
console.log("EJERCICIO 2 Mostrar impares del 3 al 17 \n \n LOS NUMEROS IMPARES SON:");

for (let i = 3; i <=17; i++){
    if (i % 2){
        console.log (i);
    }
}

/*Utiliza la siguiente array para resolver los próximos ejercicios: 
1-Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin utilizar el método filter de los arrays. Utilizad el bucle for of.
2-Crea un array con la gente que empieza por J. Sin utilizar el método filter de los arrays. Utilizad el bucle for of y muéstralo por consola.
3-Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.
4-Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.
*/
console.log("\n" );
console.log("EJERCICIO 3.1 Mayores de 25 años");
let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

const mayor25 = []


for (persona of gente){
    if (persona.edad > 25){
        mayor25.push(persona)       
    }
}  
  
console.log(mayor25)

//*******************//


console.log("\n" );
console.log("EJERCICIO 3.2 Nombres que empiezan por J");

const porJ= []

for (persona of gente){
    if (persona.nombre[0] == "J" ){
        porJ.push(persona)  
        
    }
}  

console.log(porJ);

//*******************//

console.log("\n" );
console.log("EJERCICIO 3.3 Nombres de 4 letras");


const letras4 = []

for (persona of gente){
    if (persona.nombre.length == 4){    
        letras4.push(persona)
    }
}  
  
console.log(letras4); 
  
//*******************//

console.log("\n" );
console.log("EJERCICIO 3.4 Menores de 40 años y que su nombre empiece por J");
 
const menos40yPorJ = []

for (persona of gente){
    if (persona.edad < 40 && persona.nombre[0] == "J" ){    
        menos40yPorJ.push(persona)
    }
}
  
console.log(menos40yPorJ)


//Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'



