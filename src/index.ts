import express from "express";
import dotenv from "dotenv";
import routing from "./routers/route.main";
import { updateColombiaDate } from "./global/date.global";
import cors from "cors";
import {authenticate}from './middleware/middleware'
dotenv.config();

const app = express();
//puerto prometeo
const PORT = Number(process.env.PORT_API || 3000);
app.use(express.json());
app.locals.nameAgent = 'JEFFERSON';
app.use(cors());
//date log colombia
app.use((req, res, next) => {
  updateColombiaDate();
  next();
});
//ruta main prometeo
app.use("/api/v1/", routing);
//server prometeo
app.listen(PORT, () => {
  console.log(`servisor en el puerto ${PORT} http://localhost${PORT} `);
});
