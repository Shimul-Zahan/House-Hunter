const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./database/connectDB');
const User = require('./model/User');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


app.get('/api/health', (req, res) => {
    res.send('Server is good');
})

app.post('/api/registration', async (req, res) => {
    const user = req.body;
    const result = await User.create(user);
    res.status(200).json(result);
})

app.post('/api/login', async (req, res) => {
    const user = req.body;
    console.log(user);
    const result = await User.findOne({ $and: [{ email: user.email }, { password: user.password }] });
    res.status(200).json(result);
})

app.get('/api/registration', async (req, res) => {
    res.status(200).json({ message: 'user added successfully' });
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




