const db = require('../../db');

module.exports = {

  insereParticipacao: (idPessoa, idEvento) => {
    return new Promise ((resolve, reject) => {

      db.query(` INSERT INTO pessoa_participa_evento2 (pessoas_idPessoa, eventos_idEvento) VALUES (?, ?)`,
                [idPessoa, idEvento],
                (error, results) => {
                    if (error) {reject(error); return}
                    resolve(results.insertId)
                });                   
    });
  },

  deletaParticipacao: (id) => {
    return new Promise ((resolve, reject) => {
      db.query('DELETE FROM pessoa_participa_evento2 WHERE id_participacao = ?', [id],
      (error, results) => {
          if (error) {reject(error); return}
          resolve(results)
      });
  });
  }

}