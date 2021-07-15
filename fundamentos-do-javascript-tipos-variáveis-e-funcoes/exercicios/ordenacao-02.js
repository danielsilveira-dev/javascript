function ordenacao(a, b) {
   return a-b;
}
const lista = [10, 16, 21, 3, 4, 5, 7, 2]

for(var i = 0;i < lista.length; i++){
   console.log(lista[i])
}
const resultado = lista.sort(ordenacao)
console.log(resultado)