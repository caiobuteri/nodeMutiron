const servicesEventos = require('../services/servicesEventos');

module.exports = {

  listaEventos: async(req, res) => {

    let json = {error:'', result: []}

    let eventos = await servicesEventos.leEventos();

    for (let evento in eventos){
        json.result.push({
            idevento: eventos[evento].idEvento,
            titulo: eventos[evento].titulo,
            descricao: eventos[evento].descricao,
            data: eventos[evento].data,
            local: eventos[evento].localizacao,
            criador: eventos[evento].criador
        });
    }
    return (json.result);
  },

  getEventosUserLike: async(user) => {
    let events = [];

    // console.log(user);

    events = await servicesEventos.getEventosUserLike(user);
    // console.log(events);
    return events;
  },

  getEventosUserParticipa: async(user) => {
    let events = [];

    // console.log(user);

    events = await servicesEventos.getEventosUserParticipa(user);
    // console.log(events);
    return events;
  },

  getEvento: async(id) => {

    let json = {error:'', result: []}

    let evento = await servicesEventos.getEvento(id);

    json.result.push(evento);

    return (evento[0]);
  },

  insereEventos: async(info) => {

    // let json = { error: '', result: []}

    let titulo = info[0];
    let descricao = info[1];
    let data = info[2];
    let localizacao = info[3];
    let user = info[4];

    let eventId = await servicesEventos.insereEvento(titulo, descricao, data, localizacao, user);
    
    return eventId;
    // json.result = {
    //   id: idEvento,
    //   titulo,
    //   descricao,
    //   data,
    //   localizacao,
    //   criador
    // } 
  },

  deleteEvento: async(req, res) => {

    let id = req.params.id;

    // let json = { error: '', result: []}

    await servicesEventos.deleteEvento(id)
  
    res.send(`Evento ${id} deletado!`);
  }
}