let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function clickConsole() {
    alert("El botón fue clicado");
}

function clickPrompt() {
    let ciudadBrasil = prompt('Escribe el nombre de una ciudad de Brasil :');
    alert(`Estuve en ${ciudadBrasil} y me acordé de ti 😉​`);
};

function clickAlerta() {
    alert("Yo amo JS");
};

function clickSuma() {
    let numero1 = prompt('Escribe un número :');
    let numero2 = prompt('Escribe otro número :');
    let numerosSumados = Number(numero1) + Number(numero2);
    alert(`La suma es : ${numerosSumados}.`);
}