// Consultar al usuario el año de su vehiculo(valor numerico)
// Pasarle por alert el valor que tiene su impusto de patente anual
// Si el auto tiene menos de 10 años de antiguedad abona $5000 (0-9 años)
// Si el auto tiene entre 10 y 15 años de antiguedad abona $3500 (10 - 15años)
// Sino abona $ 10000

let anioAuto = parseInt(prompt('De que año es tu vehiculo?'));
let antiguedad = 2022 - anioAuto;
let montoMenosDe10 = 50000;
let montoEntre10y15 = 35000;
let montoMasDe15 = 10000;



if((antiguedad >= 0) && (antiguedad < 10)) {

        alert('Tu vehiculo tiene' + antiguedad + 'años\nDebes abonar $'+ montoMenosDe10);

} else if((antiguedad >= 10) && (antiguedad <= 15)) {

        alert('Tu vehiculo tiene' + antiguedad + 'años\nDebes abonar $' + montoEntre10y15);

} else {
    
       alert('Tu vehiculo tiene' + antiguedad + 'años\nDebes abonar $' + montoMasDe15);
}
