const express = require('express');
const cors = require('cors');
const port = 3001;
const userRoutes = require('./Routes/UserRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRoutes);

app.listen(port, () => console.log(`server rodando em http://localhost:${port}`));
