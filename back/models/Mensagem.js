const mongoose = require('mongoose');

const mensagemSchema = new mongoose.Schema({
  conversaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversa' },
  autorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  texto: String
}, { timestamps: true });

module.exports = mongoose.model('Mensagem', mensagemSchema);