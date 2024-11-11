// routes/adotantes.js
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Criar um novo adotante
router.post('/', async (req, res) => {
  const { nome, email, telefone, endereco } = req.body;
  try {
    const adotante = await prisma.adotante.create({
      data: { nome, email, telefone, endereco },
    });
    res.status(201).json(adotante);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar adotante." });
  }
});

// Listar todos os adotantes
router.get('/', async (req, res) => {
  const adotantes = await prisma.adotante.findMany();
  res.json(adotantes);
});

// Buscar um adotante por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const adotante = await prisma.adotante.findUnique({ where: { id: parseInt(id) } });
  if (adotante) res.json(adotante);
  else res.status(404).json({ error: "Adotante não encontrado." });
});

// Atualizar um adotante
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, endereco } = req.body;
  try {
    const adotante = await prisma.adotante.update({
      where: { id: parseInt(id) },
      data: { nome, email, telefone, endereco },
    });
    res.json(adotante);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar adotante." });
  }
});

// Deletar um adotante
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.adotante.delete({ where: { id: parseInt(id) } });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar adotante." });
  }
});

module.exports = router;
