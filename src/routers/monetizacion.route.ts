import express from "express";
import {
  getItemMonetizacion,
  getItemMonetizacionById,
  CreateItemMonetizacion,
  updateItemMonetizacion,
  deleteItemMonetizacion
} from "../services/monetizacion.controller";

const route = express.Router();

route.get("/", getItemMonetizacion);
route.get("/:id_item", getItemMonetizacionById);
route.post("/", CreateItemMonetizacion);
route.put("/:id_item", updateItemMonetizacion);
route.delete("/:id_item",deleteItemMonetizacion);
export default route;
