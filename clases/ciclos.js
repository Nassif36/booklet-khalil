/** For basico **/
// for (let i = 0; i < 10; i++) {
//     document.write('Vamos por la repeticion numero ' + i + '<br>')
// }


// let ingresarNumero = parseInt(prompt("Ingresar Numero"));

// for(let i = 1; i <= 10; i++){
//     let resultado = ingresarNumero * i;

//     alert(ingresarNumero +" X "+ i +" = "+ resultado)
// }

// for (let i = 1; i <= 5; i++) {
    
//     let ingresarNombre = prompt("Ingresar nombre");

//     console.log("TURNO N° "+i+" Nombre: "+ingresarNombre);


// }


// let nombreMessi;

// for (let i = 1; i <= 3; i++) {

//     nombreMessi = prompt("Ingresar el nombre de Messi");
//     if(nombreMessi == "lionel"){
//         alert("Excelente");
//         break;

//     }
//     alert("Te equivocaste, te quedan"+(3-i)+" intentos");

// }

// let entrada = prompt("Ingresar un dato");

// while(entrada != "ESC") {
//     alert("El usuario ingreso " + entrada);

//     entrada = prompt("Ingresar otro dato");
// }

// console.log('Calculador de disconto 10% en efete');

// let precio = parseFloat(prompt("Ingresa el precio de tu producto y te dire el precio en efectivo"));
// let precioConDescuento;

// while(precio != 0) {

//     precioConDescuento = precio * 0.9;

//     alert("Si abonas en efectivo pagas $"+ precioConDescuento);

//     precio = parseFloat(prompt("Ingresa el precio de tu producto(0 para salir)"));
// }
// console.log("Chau hasta pronto");

// let numero = 0;

// do {
//     numero = prompt("Ingresar Numero");
//     console.log(numero);
// }while(parseInt(numero));

let producto = prompt("Ingrese la verdura o fruta para saber precio por KG");

while(producto != "ESC"){
    switch(producto){

        case "banana":
        case "pera":
            alert("250$ EL KG");
            break;
        case "tomate":
            alert("500$ EL KG");
            break;
        case "lechuga":
            alert("105 EL KG")
            break;

        default:
            alert("sin stock");
            break;
    }
    producto = prompt("Ingrese la verdura o fruta para saber precio por KG")
}