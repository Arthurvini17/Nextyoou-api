const express = require('express');
const cors = require('cors');
const port = 3001;
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

const userRoutes = require('./Routes/UserRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRoutes);

app.listen(port, () => console.log(`server rodando em http://localhost:${port}`));
