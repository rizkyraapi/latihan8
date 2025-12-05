const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Import Routes
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/products.routes'); // <-- WAJIB ADA

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes); // <-- WAJIB ADA

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
