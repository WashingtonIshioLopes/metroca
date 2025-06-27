const mongoose = require('mongoose');

const conversaSchema = new mongoose.Schema({
  participantes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
  produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto' }
}, { timestamps: true });

module.exports = mongoose.model('Conversa', conversaSchema);