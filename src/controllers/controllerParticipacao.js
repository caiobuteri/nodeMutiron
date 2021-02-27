const servicesParticipacao = require('../services/servicesParticipacao');

module.exports = {
  insereParticipacao: async(req, res) => {
      let json = {error: '', result: {}}
  
          let idPessoa = 1;
          let idEvento = 1;
  
          
  
          let participacaoId = await servicesParticipacao.insereParticipacao(idPessoa, idEvento);
  
          json.result = {
              participacaoId,
              idPessoa,
              idEvento
          }
  
          res.json(json)
  },

  deletaParticipacao: async(req, res) => {

    let id = req.params.id;

    // let json = { error: '', result: []}

    await servicesParticipacao.deletaParticipacao(id)
  
    res.send(`Participação ${id} desfeita!`);
  }   

}