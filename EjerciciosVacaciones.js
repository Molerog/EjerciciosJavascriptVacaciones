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

console.log("\n")
console.log("TEST 1")


const ordenador = {                         
    marca: "La pava",
    tipo: "portátil",
    perifericos: [,"touchPad"],
    almacenamiento :{
        discos : ["SSD","HDD"],
        maestro: 0
    }      
}

 // TEST 1
 if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 2
  if (ordenador.marca === "La pava") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 3
  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 4
  if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 5
  if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 6
  if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


  console.log("\n")
  console.log("TEST 2")

  const obj = {
      a:{
          b : true,
          c : [1,2],
      },
      d: 5,
      f: "Casa",
  }
  
// TEST 1
if (typeof obj === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 2
  if (typeof obj.a.b === "boolean") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 3
  if (typeof obj.a.c[1] === "number") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof obj.d === "number") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (obj.d > 4 && obj.d < 8) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (typeof obj.f === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 7
  if (obj.f.length === 4) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

 
  console.log("\n")
  console.log("TEST 3")

  const arr = [{name:"pepito", age:25},{name:"pepito", age: 30},{name:"Javi", age:20}];

  
      
    
// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (typeof arr[0] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (typeof arr[1] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof arr[2] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (arr.length === 3) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[0].name === arr[1].name) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 7
  if (arr[1].name === "pepito") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 8
  if (arr[1].age > arr[2].age) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 9
  if (arr[0].age === 25) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 10
  if (typeof arr[2].name === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // TEST 11
  if (arr[2].name[0] === "J") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  console.log("\n" );
  console.log("EJERCICIO DE FUNCIONES 1");
  
/*Crea la función convierteString debe recibir un tipo number y devolver el número como string.
Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'
*/

function convierteString (num){
    if ( isNaN(num)){
        alert("Debo ser ejecutada con un número")

    } else{
        num =  String(num)
        console.log(num);
    }
}


convierteString(4)

/*
Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
*/


console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 2");

function caracterInicial(string){
    if (string.length == 0){
      alert("Debo ser ejecutada con un string no vacío");

     } else if (typeof string === "string"){
       return  string.charAt(0);  

      } else {
        alert("Debo ser ejecutada con un string");
      }
}

let primeraLetra = caracterInicial("Baku");

console.log(primeraLetra);

//Comentario: en este ejercicio quería que saltara la alerta de string vacío específicamente si no se introducía nada. En el else if si ponía (typeof string != string) me ahorraba poner los tipos de datos uno a uno pero entonces el else no funcionaba como esperaba porque el propio vacío ya lo entendía como un tipo de dato no string y la alerta del else no se aplicaba. Un string vacío se representa así "", sin embargo no sé por qué el else no lo acepta y salta la alerta. 


/*
Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
*/

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 3");

function ultimoCaracter(string){
  if (string.length == 0){
    alert("Debo ser ejecutada con un string no vacío");

   } else if (typeof string === "string"){
     return  string.slice(-1);  

    } else {
      alert("Debo ser ejecutada con un string");
    }
}

let ultimaLetra = ultimoCaracter("Baku");

console.log(ultimaLetra);


/*
Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'
*/


console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 4");


function cuentaCaracteres(string){

     if (typeof string === "string"){
     return  string.length  

    } else {
      alert("Debo ser ejecutada con un string");
    }
}

let numCaracteres = cuentaCaracteres("Baku");

console.log(numCaracteres);


/*
Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'
*/

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 5");


function getCiudadesOrdenada(string){
  if (typeof string != "string" || !string.includes(',')){
    alert("No es un formato correcto");
  } else {
    alpha = string.split(",")
    return alpha.sort()
  }
}
 
let ciudades = getCiudadesOrdenada("Valencia, Sevilla, Toledo, Albacete, Barcelona");
console.log(ciudades);


/*
Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'
*/

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 6");


function esPalindromo(string) {
  myBreak:
  if (string.length == 0 || typeof string != "string"){
    
    alert ("No es un formato correcto");
    break myBreak
  }
  
  const arrayValues = string.split('');

  const reverseArrayValues = arrayValues.reverse();

  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      console.log('Es un palindromo');
  }
  else {
      console.log('No es un palindromo');
  }
}


esPalindromo("rallar");           //No he podido hacer que al poner un string vacío no salte el console.log de "Es un palindromo"

/*
Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
Si la función no recibe un número debería devolver devolver 'no es un formato correcto'
*/

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 7");

function getPrecioMostrar(num){
  if (typeof num != "number"){
    alert("No es un formato correcto");
  } else {
    num = num.toLocaleString("en-EU", {style:"currency", currency:"EUR"});
    return num
  }
}

let money = getPrecioMostrar(2)

console.log(money);

//Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 8");

function division(a,b){
  let divi = a/b
  return divi
}

let div= division(10,5)

console.log(div);

// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 9");

function esPar(a){
  if (a % 2 == 0){
    return true
  } else{
    return false
  }
}

let par = esPar(2)
console.log(par);

//Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 10");

function ordenarArray2(arr){  
  arr = arr.sort(function (a, b) {  return b - a;  })
  return arr
}

let orden = ordenarArray2([1,2,3,4,5,6,7,8,9,10])

console.log(orden)

//Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 11");

function obtenerImpares(arr){
  arr = arr.filter(n => n%2);
  return arr
}
  
let odds = obtenerImpares([1,2,3,4,5,6,7,8,9,10])

console.log(odds)

//Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 12");

function sumarArray(arr){
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
  }
  return sum
}

let suma = sumarArray([1,2,3]);
console.log(suma);


//Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 13");

function multiplicarArray(arr){
  let mult = 1;
 
  for (multiplicacion of arr){
       mult *= multiplicacion
  
  }
    return mult
}
let multiplicar = multiplicarArray([2,3,4]);
console.log(multiplicar);

//Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 14");

function numerosMayores (arr){
  let mayores = []

  for (numero of arr){

    if (numero > 5){
       mayores.push(numero)
   }
    
  }
  return mayores
}

let formula = numerosMayores([1,5,10,6,3,2,12]);

console.log(formula);

/*
Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
*/

console.log("\n" );
console.log("EJERCICIO DE FUNCIONES 15");

const num = parseInt(prompt("Ingresa un numero"));
let esPrimo = true;


if (num === 1) {
    alert("Ingresa un numero mayor a 1");
}

else if (num > 1) {
  
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            esPrimo = false;
            break;
        }
    }
    if (esPrimo) {
        console.log(true);
    } else {
        console.log(false);
    }
}