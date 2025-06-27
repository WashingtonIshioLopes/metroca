const Conversa = require('../models/Conversa');
const Mensagem = require('../models/Mensagem');

exports.criarConversa = async (req, res) => {
  const { usuarioDestinoId, produtoId } = req.body;
  const conversa = await Conversa.create({ participantes: [req.userId, usuarioDestinoId], produtoId });
  res.status(201).json(conversa);
};

exports.listarConversas = async (req, res) => {
  const convs = await Conversa.find({ participantes: req.userId }).populate('participantes produtoId');
  res.json(convs);
};

exports.listarMensagens = async (req, res) => {
  const msgs = await Mensagem.find({ conversaId: req.params.id }).populate('autorId');
  res.json(msgs);
};

exports.enviarMensagem = async (req, res) => {
  const mensagem = await Mensagem.create({ conversaId: req.params.id, autorId: req.userId, texto: req.body.texto });
  res.status(201).json(mensagem);
};