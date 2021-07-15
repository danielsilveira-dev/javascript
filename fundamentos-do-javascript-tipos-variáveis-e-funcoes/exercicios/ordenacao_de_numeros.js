function comparaNumeros(a, b) {
   if(a == b){
      return 0;
   }
   if(a < b){
      return 1;
   }
   if(a > b){
      return -1;
   }
}
var lista = [10, 2, 4, 3, 9, 21, 32, 43, 31, 36, 90]
const listaOrdenada = lista.sort(comparaNumeros)
console.log(listaOrdenada)

