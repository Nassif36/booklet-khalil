
let validacion1 = 'y';
let validacion2 = 'Y';


for(i = 1; i < 25; i++) {
    let pedirTecla = prompt('Presione una tecla ');
    if( pedirTecla == validacion1 || pedirTecla == validacion2) {
        alert("Coorectoo");
    } 
}