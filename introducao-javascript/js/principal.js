var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

// console.log(tdPeso);
// console.log(peso);

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent; // altura é o conteúdo de texto dentro do td

// console.log(tdAltura);
// console.log(altura);

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura); // Ficar atento sempre à ordem de precedência dos operadores
console.log(imc);
tdImc.textContent = imc;