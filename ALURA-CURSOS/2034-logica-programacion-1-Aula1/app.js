
// Variables

let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1
let palabraVeces = 'vez';
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un n�mero entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    /*
    Este codigo realiza
    la comparaci�n
    */
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condici�n
        alert(`Acertaste, el n�mero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('El n�mero secreto es menor');
        } else {
            alert('El n�mero secreto es mayor');
        }
        // incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        // No se cumpli� la condici�n
        //alert('Lo siento, no acertaste el n�mero');
    }
}