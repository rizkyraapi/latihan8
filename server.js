const express = require('express');
const app = express();
const port = 8001;
const userRoutes = require('./routes/user.routes');

app.use(express.json());

// Route utama
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route users
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});