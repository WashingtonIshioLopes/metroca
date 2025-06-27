const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const usuarioRoutes = require('./routes/usuarios');
const produtoRoutes = require('./routes/produtos');
const conversaRoutes = require('./routes/conversas');
const uploadRoutes = require('./routes/upload');

// Inicialização
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Conexão MongoDB
mongoose.connect('mongodb://localhost:27017/trocamento', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error(err));

// Rotas
app.use('/auth', authRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/produtos', produtoRoutes);
app.use('/conversas', conversaRoutes);
app.use('/upload', uploadRoutes);

// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));