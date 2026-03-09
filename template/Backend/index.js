const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; // ou 3000, mas evitamos conflito com React

app.use(cors()); // permite requisições do frontend
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Backend funcionando!' });
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});