const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const recipesRouter = require('./src/routes/RecipesRoutes');
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use('/api/recipes', recipesRouter)

app.get('/', (req, res) => {
    res.send('Server created successfully!');
})

app.listen(PORT, console.log(`Server running on Port: ${PORT}`));