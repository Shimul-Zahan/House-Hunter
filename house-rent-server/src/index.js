const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./database/connectDB');
const port = process.env.PORT || 3000;

// all api here
const mainMiddleware = require('./middleware/middleware');
const getAllUsers = require('../src/router/router');
const userRegistration = require('../src/router/router');
const userLogin = require('../src/router/router');
const houseAdd = require('../src/router/router');

// all middleware
mainMiddleware(app);
app.use(getAllUsers);
app.use(userRegistration);
app.use(userLogin);
app.use(houseAdd);


app.get('/api/health', (req, res) => {
    res.send('Server is good');
})

app.all('*', (req, res, next) => {
    const error = new Error(`Invalid url: [${req.url}]`)
    error.status = 404;
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 5000).json({ message: err.message });
})

const final = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log('House Hunter Connect Successfully')
        console.log(`Server running at localhost:${port}`);
    })
}

final();




