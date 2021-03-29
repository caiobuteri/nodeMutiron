const services = require('../services/servicesUsuarios');

module.exports = {

  leUsuarios: async(req, res) => {
    let json = {error:'', result: []}

        let pessoas = await services.leUsuarios();
        for (let pessoa in pessoas){
            json.result.push({
                idpessoa: pessoas[pessoa].idpessoa,
                nome: pessoas[pessoa].nome,
                senha: pessoas[pessoa].senha
            });
        }
        return json
    },

    getUserName: async(nome) => {
      let json = {error:'', result: []}
  
      let user = await services.getUserName(nome);      
    
      json.result.push(user);

      // console.log(user[0]);

      return user[0];
    },

    getUserId: async(id) => {
      // let json = {error:'', result: []}
  
      await services.getUserId(id).then((result) => {
        return result;
      });      
    },

  insereUsuario: async(req, res) => {
    let nome = req.body.nome;
    let senha = req.body.senha;

    let json = {error: '', result: {}}

    if (!nome && senha){
        json.error = 'Campos não enviados'
        return json;
    }

    let pessoaId = await services.insereUsuario(nome, senha);

    json.result = {
        id: pessoaId,
        nome,
        senha
    }

    return json;
  },
  
  atualizaUsuario: async(req, res) => {
    let json = {error: '', result: []}

    let id = 1;
    let nome = "caio";
    let senha = "124";

    if (id && nome && senha){

      await services.atualizaUsuario(id, nome, senha);

      json.result = { 
                  id,
                  nome,
                  senha
              }

  } else {
      json.error = 'Dados não enviados!';
  }

  return json;

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

      json.error =  'Não foi possível deletar o usuário.';
    }

    return json;
  },

  loginMobile: async (nome, senha) => {

    const result = await services.loginMobile(nome, senha);

    function isEmpty(obj) {
      console.log(obj)
      console.log(Object.keys(obj).length)
      return Object.keys(obj).length === 0;
  }

    if (isEmpty(result)){
      
      return { success: 0};


    } else {
      
      return { success: 1};
    
    }
  },

}