const db = require('../database/db')

module.exports = {
  leUsuarios: () => {
      return new Promise((resolve, reject) => {

          db.query('SELECT * FROM pessoas', (error, results) => {
              if (error) {reject(error); return}
              resolve(results)
          })
      })
  },

  getUserName: (nome) => {
    return new Promise((resolve, reject) => {

        db.query('SELECT * FROM pessoas WHERE nome = ?', [nome],
         (error, results) => {
            if (error) {reject(error); return}
            resolve(results)
        })
    })
  },

getUserId: (id) => {
  return new Promise((resolve, reject) => {

      db.query('SELECT * FROM pessoas WHERE idpessoa = ?', [id],
       (error, results) => {
          if (error) {reject(error); return}
          resolve(results)
      })
  })
},

  insereUsuario: (nome, senha) => {
    return new Promise ((resolve, reject) => {

      db.query(` INSERT INTO pessoas (nome, senha) VALUES (?, ?) `,
                  [nome, senha],
                  (error, results) => {
                      if (error) {reject(error); return}
                      resolve(results.insertId)
                  })
  
    });
  },

  atualizaUsuario: (id, nome, senha) => {

    return new Promise ((resolve, reject) => {

        db.query("UPDATE pessoas SET nome = ?, senha = ? WHERE idpessoa = ?;",
                  [nome, senha, id],
                  (error, results) => {
                    if (error) {reject(error); return}
                    resolve(results)
                });  
    });
  },

  deleteUsuario: (id) => {
    return new Promise ((resolve, reject) => {
      db.query('DELETE FROM pessoas WHERE idpessoa = ?', [id],
      (error, results) => {
          if (error) {reject(error); return}
          resolve(results)
      });
  });
  },

  loginMobile: (nome, senha) => {
    return new Promise ((resolve, reject) => {
      db.query("SELECT nome, senha FROM pessoas WHERE nome = ? and senha = ?", [nome, senha],
      (error, results) => {
          if (error) {reject(error); return}
          resolve(results)
      });
  });
  }

}