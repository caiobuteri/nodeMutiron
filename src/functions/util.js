const controller = require('../controllers/controllerEventos');

module.exports = {

  preencheArrayEventosCurtidos: async(id_usuario, id_evento) => {

    let events = await controller.getEventosUserLike(id_usuario);

    let eventos = JSON.parse(JSON.stringify(events));

    let array = [];

    eventos.forEach(element => {
      array.push(element.eventos_idevento);
    });

    let evento = await controller.getEvento(id_evento);

    let eventoInfo = JSON.parse(JSON.stringify(evento));

    return dados = [array, eventoInfo];
    
  },

  preencheArrayEventosParticipados: async(id_usuario, id_evento) => {

    let events = await controller.getEventosUserParticipa(id_usuario);

    let eventos = JSON.parse(JSON.stringify(events));

    let array = [];

    eventos.forEach(element => {
      array.push(element.eventos_idevento);
    });

    return array;
    
  }

}

// TEM QUE TRAZER: USER, ID EVENTO

// TEM QUE RETORNAR EVENTO E ARRAY