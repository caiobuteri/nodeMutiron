const db = require('../database/db');

module.exports = {

  participa: (idPessoa, idEvento) => {
    return new Promise ((resolve, reject) => {

      db.query(` INSERT INTO pessoa_participa_evento2 (pessoas_idPessoa, eventos_idEvento) VALUES (?, ?)`,
                [idPessoa, idEvento],
                (error, results) => {
                    if (error) {reject(error); return}
                    resolve(results.insertId)
                });                   
    });
  },

  desparticipa: (id_usuario, id_evento) => {
    return new Promise ((resolve, reject) => {
      db.query('DELETE FROM pessoa_participa_evento2 WHERE pessoas_idpessoa = ? AND eventos_idevento = ?', [id_usuario, id_evento],
      (error, results) => {
          if (error) {reject(error); return}
          resolve(results)
      });
  });
  }

}