import express,{Request,Response} from "express";

import {
  getInforme,
  getInformeBiId,
  createInformeResgister,
  UpdateInformeResgister,
  deleteInformeResgister,
  getInformeByDate,
  getInformeByAgentAndDate,
  getInformeByFilterteenItems,
  getInformeByFilterteenItemsSitar,
  getInformeByFilterteenItemsSac,
  getInformeByFilterteenItemsSitarAndValue,
  getInformeByFilterteenItemsSacAndValue
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
route.get("/filterDate", getInformeByDate); //obtener informe por fecha
route.get("/dayDate", getInformeByAgentAndDate);//obtener informe por fecha y agente
route.get("/filter", getInformeByFilterteenItems);//obtener informe 10 items mas utilizados general
route.get("/filterSac", getInformeByFilterteenItemsSac);//obtener informe 10 items mas utilizados y SAC
route.get("/filterSitar", getInformeByFilterteenItemsSitar);//obtener informe 10 items mas utilizados y SITAR
route.get("/filterSacValue",getInformeByFilterteenItemsSacAndValue)//obtener informe 10 items mas utilizados y SAC y VALOR
route.get("/filterSitarValue",getInformeByFilterteenItemsSitarAndValue)//obtener informe 10 items mas utilizados y SITAR y VALOR

export default route;
