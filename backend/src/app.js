
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from "./routes/index.js"

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});