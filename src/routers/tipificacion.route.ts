import express from "express";
import {
  getItemTypeCause,
  getItemTypecauseByid,
  creaateItemTypecause,
  updateItemTypecause,
  deleteItemTypecause,
} from "../services/tipificaion.controller";
const route = express.Router();

route.get("/", getItemTypeCause);
route.get("/:id_item", getItemTypecauseByid);
route.post("/", creaateItemTypecause);
route.put("/:id_item", updateItemTypecause);
route.delete("/:id_item", deleteItemTypecause);

export default route;
