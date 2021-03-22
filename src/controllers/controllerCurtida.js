const services = require('../services/servicesCurtir');

module.exports = {

  curte: async(id_criador, id_evento) => {
    await services.curte(id_criador, id_evento);
  },

  descurte: async(id_criador, id_evento) => {
    await services.descurte(id_criador, id_evento);
  }
}