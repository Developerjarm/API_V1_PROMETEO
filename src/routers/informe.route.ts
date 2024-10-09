import express,{Request,Response} from "express";

import {
  getInforme,
  getInformeByDate,
  getInformeByAgentAndDate,
  getInformeBiId,
  createInformeResgister,
  UpdateInformeResgister,
  deleteInformeResgister
} from "../services/informe.controller";

const route = express.Router();
const app = express();
//test funcion informe sucess
route.get("/register/", getInforme);
route.get("/register/:id_item",getInformeBiId)
route.post("/register",createInformeResgister)
route.put("/register/:id_item",UpdateInformeResgister)
route.delete("/register/:id_item",deleteInformeResgister)
//test funcion informe sucess
route.get("/filterDate", getInformeByDate);
route.get("/dayDate", getInformeByAgentAndDate);
route.get('/prueba',(req: Request, res: Response)=>{
  res.send(req.app.locals.nameAgent)
})

export default route;
