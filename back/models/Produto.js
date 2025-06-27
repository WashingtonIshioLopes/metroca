const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  nome: String,
  categoria: String,
  descricao: String,
  fotoUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Produto', produtoSchema);