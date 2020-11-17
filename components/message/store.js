const db = require('mongoose');
const Model = require('./model')

// mongodb+srv://db_telegrom:tH7PPwKskvZI5sSC@cluster0.pp3cm.mongodb.net/test
db.Promise = global.Promise;

db.connect('mongodb+srv://db_telegrom:tH7PPwKskvZI5sSC@cluster0.pp3cm.mongodb.net/test', {
     useNewUrlParser: true,
     useUnifiedTopology: true
});
console.log('[db] Conectado con éxito');

function addMessage(message) {
     // list.push(message);
     const myMessage = new Model(message);
     myMessage.save();
};

async function getMessages() {
     // return list;
     const messages = await Model.find();
     return messages;
};

async function updateMessage(id, message) {
     const foundMessage = await Model.findOne({ _id: id });

     foundMessage.message = message;
     const newMessage = await foundMessage.save();
     return newMessage;
};

module.exports = {
     add: addMessage,
     list: getMessages,
     updateMessage: updateMessage,
};
