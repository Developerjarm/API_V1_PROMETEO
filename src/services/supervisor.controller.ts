import { Request, Response } from "express";
import pool from "../database/db";
import {
  queryGetItemSupervisor,
  queryGetItemSupervisorById,
  queryCreateItemSupervisor,
  queryUpdateItemSupervisor,
  queryGetItemSupervisorByNme,
  queryDeleteItemSupervisor,
} from "../querys/query.supervisor";
import { ReqId, CreateItems } from "../global/create.interface";

//GET ITEM SUPERVISOR
export const getItemsSupervisor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await pool.query(queryGetItemSupervisor);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error al obtener los TEMS" });
  }
};

//GET ITEM SUPERVISOR BY ID
export const getItemsSupervisorById = async (
  req: Request<ReqId, {}, {}>,
  res: Response
): Promise<void> => {
  const { id_item } = req.params;
  try {
    const result = await pool.query(queryGetItemSupervisorById, [id_item]);
    if (result.rowCount === 0) {
      res
        .status(200)
        .json({ message: `No se encontro nungin ITEM con el ID ${id_item} ` });
    } else {
      res.status(200).json(result.rows);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el " });
  }
};
//CREATE NAME ITEM SUPERVISOR
export const createItemSupervisorById = async (
  req: Request<{}, {}, CreateItems>,
  res: Response
): Promise<void> => {
  const { name_item } = req.body;
  try {
    const result = await pool.query(queryGetItemSupervisorByNme, [
      name_item,
    ]);
    if (result.rows.length >= 1) {
      res
        .status(500)
        .json({
          message: `Ya existe un Item con el nombre: ${name_item}`,
        });
    } else {
      const result = await pool.query(queryCreateItemSupervisor, [
        name_item,
      ]);
      res.status(200).json(result.rows);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el Item " });
  }
};

//UPDATE NAME ITEM SUPERVISOR
export const updateItemSupervisorById = async (
  req: Request<ReqId, {}, CreateItems>,
  res: Response
): Promise<void> => {
  const { name_item } = req.body;
  const { id_item } = req.params;
  try {
    const result = await pool.query(queryUpdateItemSupervisor, [
      name_item,
      id_item,
    ]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el Item " });
  }
};

//DELETE ITEM SUPERVISOR BY ID
export const deleteItemSupervisorById = async (
  req: Request<ReqId, {}, {}>,
  res: Response
): Promise<void> => {
  const {id_item} = req.params;
  try {
    const result = await pool.query(queryGetItemSupervisorById, [id_item]);
    if (result.rows.length === 1) {
      const reslut = await pool.query(queryDeleteItemSupervisor, [id_item]);
      res.status(200).json(reslut.rows);
    } else {
      res.status(500).json({ message: `No existe un ITEM con el ID ${id_item} ` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error al borar el item` });
  }
};
