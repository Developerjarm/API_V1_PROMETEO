import { Request, Response } from "express";
import {
  queryGetItemstypeCause,
  queryGetItemstypeCauseById,
  queryGetItemstypeCauseByNme,
  queryCreateItemTypecause,
  queryUpdateItemTypecause,
  queryDeleteItemTypecause,
} from "../querys/query.tipificacion";
import pool from "../database/db";
import { ReqId, CreateItems } from "../global/create.interface";

//GET ITEMS TYPE CAUSE
export const getItemTypeCause = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(queryGetItemstypeCause);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro el obtener los ITEMS" });
  }
};

//GET ITEM TYPE CAUSE BY ID
export const getItemTypecauseByid = async (
  req: Request<ReqId, {}, {}>,
  res: Response
) => {
  const { id_item } = req.params;
  try {
    const result = await pool.query(queryGetItemstypeCauseById, [id_item]);
    if (result.rowCount === 0) {
      res
        .status(500)
        .json({ message: `No existe un ITEM con el ID ${id_item} ` });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al traer el ITEM" });
  }
};
//CREATE ITEM TYPE CAUSE
export const creaateItemTypecause = async (
  req: Request<{}, {}, CreateItems>,
   res: Response
  ) => {
  const { name_item } = req.body;
  try {
    const result = await pool.query(queryGetItemstypeCauseByNme, [name_item]);
    if (result.rows.length > 0) {
      res
        .status(500)
        .json({ message: `Ya existe un ITEM con el nombre ${name_item}` });
    } else {
      const result = await pool.query(queryCreateItemTypecause, [name_item]);
      res.status(201).json(result.rows);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el ITEM" });
  }
};

//UPDATE ITEM TYPE CAUSE
export const updateItemTypecause = async (
  req: Request<ReqId, {}, CreateItems>,
  res: Response
) => {
  const { name_item } = req.body;
  const { id_item } = req.params;
  try {
    const result = await pool.query(queryUpdateItemTypecause, [name_item, id_item]);
    if (result.rowCount === 0) {
      res.status(200).json({ message: `No existe un ITEM con el ID ${id_item}` });
    } else {
      res.status(200).json(result.rows);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el ITEM" });
  }
};

//DELETE ITEM TYPE CAUSE
export const deleteItemTypecause = async (
  req: Request<ReqId, {}, {}>,
   res: Response
  ) => {
  const { id_item } = req.params;
  try {
    const result = await pool.query(queryDeleteItemTypecause, [id_item]);
    if (result.rowCount === 0) {
      res.status(500).json({ message: `No existe un ITEM con el ID ${id_item}` });
    } else {
      res.status(200).json(result.rows);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el ITEM" });
  }
};
