class Tabelas {
   init(conexao){
      this.conexao = conexao
   }

   criarAtendimentos(){
      this.conexao.query()
   }
}
module.exports = new Tabelas