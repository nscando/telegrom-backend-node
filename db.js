const db = require('mongoose');


db.Promise = global.Promise;

const URL = 'mongodb+srv://db_telegrom:tH7PPwKskvZI5sSC@cluster0.pp3cm.mongodb.net/test'

async function connect() {
     await db.connect(URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
     });
     console.log('[db] Conectado con éxito');
}

module.exports = connect;
