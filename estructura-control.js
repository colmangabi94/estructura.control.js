// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}


// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad >= 18 && edad <= 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}



// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--; // Decrementa el número en 1
    }
}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0; // Inicializa el contador
    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++; // Incrementa el contador
    } while (contador < 5); // Continua mientras el contador sea menor que 5
}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    for (let  i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i);
            }
        }
    }
imprimirPares (5);

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for  (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break; // Detiene el bucle
            }
            console.log(i);
}}
detenerEnSeis ();

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for   (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue; // Salta al siguiente número
            }
            console.log(i);
        }
    }  

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            break;
    }
}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    switch (letra.toLowerCase()) {   // Convierte a minúscula para que sea independiente de la mayúscula
        case 'a':
            console.log("vocal"); 
            break;
        case 'e':
            console.log("vocal");
            break;
        case 'i':
            console.log("vocal");
            break;
        case 'o':
            console.log("vocal");
            break;
        case 'u':
            console.log("vocal");
            break;
        default:
            break;
    }
}
console.log(esVocal('a')); 

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    if (a >= 0 && b >= 0 && c >= 0) {
        console.log("Todos son positivos");
    } else if (a < 0 && b < 0 && c < 0) {
        console.log("Todos son negativos");
    } else {
        console.log("Al menos uno es negativo");
    }
}



// Exportar todas las funciones
module.export ={
verificarParidad,
clasificarEdad,
cuentaRegresiva,
repetirMensaje,
imprimirPares,
detenerEnSeis,
saltarCinco,
obtenerDiaSemana,
esVocal,
evaluarNumeros,

};