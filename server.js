const express = require("express");

const app = express();
const API_URL = "https://api.freetouse.com/v3/music";

app.get("/musicas", async (req, res) => {
  const categoria = req.query.categoria;

  const url = categoria
    ? `${API_URL}/tracks/search?query=${categoria}&limit=5000`
    : `${API_URL}/tracks/all?limit=5000`;

  const resposta = await fetch(url);
  const { data } = await resposta.json();

  res.json(data);
});

app.get("/musicas/:id", async (req, res) => {
  const resposta = await fetch(
    `${API_URL}/tracks/${req.params.id}`
  );
  const { data } = await resposta.json();

  res.json(data);
});

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});