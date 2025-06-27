const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true },
  senhaHash: String,
  linhas: [String],
  estacoes: [String],
  diasSemana: [String],
  horarios: [String]
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);