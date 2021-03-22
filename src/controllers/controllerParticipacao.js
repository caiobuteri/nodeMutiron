const servicesParticipacao = require('../services/servicesParticipacao');

module.exports = {
  participa: async(id_usuario, id_evento) => {
    await servicesParticipacao.participa(id_usuario, id_evento);
  },

  desparticipa: async(id_usuario, id_evento) => {
    await servicesParticipacao.desparticipa(id_usuario, id_evento);
  }

}