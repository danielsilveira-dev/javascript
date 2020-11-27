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

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!")
    pesoEhValido = false;
    tdImc.textContent = "Peso invállido!"

}
if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!")
    alturaEhValida = false;
    tdImc.textContent = "Altura invállida!"
}
if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura); // Ficar atento sempre à ordem de precedência dos operadores
    tdImc.textContent = imc;
}