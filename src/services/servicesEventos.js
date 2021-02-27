const db = require('../../db');

module.exports = {

  leEventos: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM eventos', (error, results) => {
          if (error) {reject(error); return}
          resolve(results)
        })
      })
    },

    insereEvento: (titulo, descricao, data, localizacao, criador) => {
        return new Promise ((resolve, reject) => {
    
          db.query(` INSERT INTO eventos (titulo, descricao, data, localizacao, criador) VALUES (?, ?, ?, ?, ?)`,
                    [titulo, descricao, data, localizacao, criador],
                    (error, results) => {
                        if (error) {reject(error); return}
                        resolve(results.insertId)
                    })                   
        })
      },

      deleteEvento: (id) => {
        return new Promise ((resolve, reject) => {
          db.query('DELETE FROM eventos WHERE idEvento = ?', [id],
          (error, results) => {
              if (error) {reject(error); return}
              resolve(results)
          })  
      })
      }
}