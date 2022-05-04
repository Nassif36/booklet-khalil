// function mostrarCurso(){
//     console.log("Curso de JS");
// }

// mostrarCurso();


// function armarFrase(parametro1, parametro2){
//     console.log(parametro1 + " " + parametro2);
// };

// armarFrase("Hola", "Lau");

// let precioFinal;

// function calcularPrecioConDescuento(precioProducto) {
//     let precioFinal = precioProducto * 0.9;
//     console.log("En efectivo $" + precioFinal);
// }

// calcularPrecioConDescuento(parseFloat(prompt("Ingrese el precio del producto")));
// console.log(precioFinal + " fuera de la funcion");

// function sumar(primerNumero, segundoNumero) {
//     return primerNumero + segundoNumero;
// }

// let resultado;
// resultado = sumar(1000, 230);
// console.log('Resultado de la suma es' + " " + resultado);

// calcularPrecioConDescuento("En efectivo" + "" + resultado);




function calculadora(primerNumero, segundoNumero, operacion) {
    switch(operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero * segundoNumero;
            break;
        default: 
            return 0;
            break;
    }
}

let salir="N";

while(salir=="N") {
    let primerNumero = parseInt(prompt("Primer numero"))
    let segundoNumero = parseInt(prompt("Segundo numero"))
    let operacion = prompt(" + para sumar - para restar * para multiplicar ")
    let resultado = calculadora(primerNumero, segundoNumero, operacion);

    console.log(resultado);
    salir=prompt("N para seguir, S para salir")
    
}


// Funcion anonima sin nombre, es utilizada para ser pasada como parametro o asignada a una variable

const suma = function (a,b) {return a + b}

console.log(suma(15,20));

// Funciones flecha

const saludo = () =>{
    let nombre=prompt("Ingresa tu nombre")
    alert("Buenos dias"+nombre)
}