const mongoose = require('mongoose');

const dotenv = require('dotenv').config();

const app = require('./app');
const DB = process.env.DATABASE_URL

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('DB connection success'));

const port = process.env.PORT || 2323;

const server = app.listen(port, () => {
    console.log(`App running on Port: ${port}`);
});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1)
    });
});