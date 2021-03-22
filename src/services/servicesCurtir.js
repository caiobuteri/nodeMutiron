const { resolve } = require('path');
const db = require('../database/db');

module.exports = {

  curte: (idPessoa, idEvento) => {
    return new Promise ((resolve, reject) => {

      db.query(` INSERT INTO pessoa_curte_evento2 (pessoas_idpessoa, eventos_idevento) VALUES (?, ?)`,
      [idPessoa, idEvento],
      (error, results) => {
        // console.log(results);
        if (error) {reject(error); return}
          resolve(results.insertId) 
      });                   
    });
  },

  descurte: (id_pessoa, id_evento) => {
  return new Promise ((resolve, reject) => {
    // console.log(id_pessoa, id_evento)
    db.query('DELETE FROM pessoa_curte_evento2 WHERE pessoas_idpessoa = ? AND eventos_idevento = ?', [id_pessoa, id_evento],
      (error, results) => {
        if (error) {reject(error); return}
          resolve(results);
      });
    });
  }
}