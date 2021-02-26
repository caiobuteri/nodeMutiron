const services = require('../services/servicesUsuarios')

module.exports = {

  leUsuarios: async(req, res) => {
    let json = {error:'', result: []}

        let pessoas = await services.leUsuarios()
        //console.log(pessoas)
        for (let pessoa in pessoas){
          //console.log(pessoas[pessoa])
            json.result.push({
                idpessoa: pessoas[pessoa].idpessoa,
                nome: pessoas[pessoa].nome,
                senha: pessoas[pessoa].senha
            })
            //console.log(json.result)
        }
        //console.log(json)
        return json
    },

  insereUsuario: async(req, res) => {
    let json = {error: '', result: {}}

        let nome = "kkk"
        let senha = "333"

        if (!nome && senha){
            json.error = 'Campos não enviados'
        }

        let pessoaId = await services.insereUsuario(nome, senha)

        json.result = {
            id: pessoaId,
            nome,
            senha
        }

        return json
  },
  
  atualizaUsuario: async(req, res) => {
    let json = {error: '', result: []}

    let id = 1;
    let nome = "caio";
    let senha = "124";

    if (id && nome && senha){

      await services.atualizaUsuario(id, nome, senha)

      json.result = { 
                  id,
                  nome,
                  senha
              }

  } else {
      json.error = 'Dados não enviados!'
  }

  return json

  },

  deleteUsuario: async(req, res) => {
    let json = { error: '', resul: []}
  
    let id = 21;
    let nome = 'davi';
    let senha = '124';

    if (id && nome && senha){
      await services.deleteUsuario(id, nome, senha)

      json.result = {
        id,
        nome,
        senha
      }

    } else {

      json.error =  'Não foi possível deletar o usuário.'
    }

    return json;
  }
}