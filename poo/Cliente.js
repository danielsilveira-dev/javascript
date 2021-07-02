export class Cliente{
  nome;
  _cpf;

  get cpf(){ // Acesso somente só de consulta do cpf
    return this._cpf;
  }

  constructor(nome, cpf){
    this.nome = nome;
    this._cpf = cpf;
  }
}