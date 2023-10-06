import express from 'express';
import "dotenv/config"
import routes from "./routes/index.js"

import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());


app.get("/", (req, res) => {
    return res.send("Hello World");
})

app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
