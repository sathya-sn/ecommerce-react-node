import express from 'express';
import data from './data';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(8000, () => {
    console.log("server started");
})