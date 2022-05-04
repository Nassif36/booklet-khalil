
let numeroUsuario = parseInt(prompt('Introduci un valor'));

if(numeroUsuario > 0 && numeroUsuario <= 1000) {
    alert('presupuesto bajo')
} else if(numeroUsuario > 1000 && numeroUsuario <= 3000) {
    alert('presupuesto medio')
} else if (numeroUsuario > 3000 ) {
    alert('presupuesto alto')
} else {
    alert('error')
}
