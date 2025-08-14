const express = require('express');
const cors = require('cors');
const port = 3001;

const userRoutes = require('./Routes/UserRoutes');
const authRoutes = require('./Routes/AuthRoutes');
const postsRoutes = require('./Routes/PostsRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//usando as rotas
app.use('/users', userRoutes);
app.use('/login', authRoutes);
app.use('/posts', postsRoutes);

app.listen(port, () => console.log(`server rodando em http://localhost:${port}`));
