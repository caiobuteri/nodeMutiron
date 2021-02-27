const servicesEventos = require('../services/servicesEventos');

module.exports = {

  listaEventos: async(req, res) => {

    let json = {error:'', result: []}

    let eventos = await servicesEventos.leEventos();

    for (let evento in eventos){
        json.result.push({
            idevento: eventos[evento].idevento,
            titulo: eventos[evento].titulo,
            descricao: eventos[evento].descricao,
            data: eventos[evento].data,
            local: eventos[evento].localizacao,
            criador: eventos[evento].criador
        });
    }

    res.json(json);
  },

  insereEventos: async(req, res) => {

    let titulo = 'Entrega de cobertores';
    let descricao = 'Vamos entregar cobertores para moradores de rua';
    let data = '2021-01-01';
    let localizacao = 'Maruipe';
    let criador = 1;

    let json = { error: '', result: []}

    let idEvento = await servicesEventos.insereEvento(titulo, descricao, data, localizacao, criador);

    json.result = {
      id: idEvento,
      titulo,
      descricao,
      data,
      localizacao,
      criador
    } 

    res.json(json);
  },

  deleteEvento: async(req, res) => {

    let id = req.params.id;

    // let json = { error: '', result: []}

    await servicesEventos.deleteEvento(id)
  
    res.send(`Evento ${id} deletado!`);
  }
}