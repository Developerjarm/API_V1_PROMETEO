import pool from "../database/db";
import { Request, Response } from "express";
import {
  queryMonetizacionItem,
  queryMonetizacionItemById,
  queryCreateItemMonetizacion,
  queryMonetizacionItemByName,
  queryUpdateItemmonetizacion,
  queryDeleteItemMonetizacion,
} from "../querys/query.monetizacion";
import{ReqId,CreateItems} from "../global/create.interface"

//GET ITEMS MONETIZACION
export const getItemMonetizacion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await pool.query(queryMonetizacionItem);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener ITEMS" });
  }
};

//GET ITEM BY ID
export const getItemMonetizacionById = async (
  req: Request<ReqId, {},{}>,
  res: Response
): Promise<void> => {
  const { id_item } = req.params;
  try {
    const result = await pool.query(queryMonetizacionItemById, [id_item]);
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No se encontro un ITEM con el ID ${id_item} ` });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el ITEM" });
  }
};
0;
//CREATE NEW ITEM MONETIZACION
export const CreateItemMonetizacion = async (
  req: Request<{}, {}, CreateItems>,
  res: Response
): Promise<void> => {
  const { name_item } = req.body;

  try {
    const name_monetizacionIfExist = await pool.query(
      queryMonetizacionItemByName,
      [name_item]
    );
    if (name_monetizacionIfExist.rows.length >= 1) {
      res.status(200).json({
        message: `Ya existe un Item con el nombre ${name_item} `,
      });
    } else {
      const result = await pool.query(queryCreateItemMonetizacion, [
        name_item,
      ]);
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear Item" });
  }
};

//UPDATE NAME ITEM MONETIZACION
export const updateItemMonetizacion = async (
  req: Request <ReqId, {}, CreateItems>,
  res: Response
): Promise<void> => {
  const { name_item } = req.body;
  const {id_item} = req.params;
  try {
    const result = await pool.query(queryUpdateItemmonetizacion, [
      name_item,
      id_item,
    ]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar" });
  }
};

//DELETE ITEM MONETIZACION
export const deleteItemMonetizacion = async (
  req: Request<ReqId, {}, {}>,
  res: Response
): Promise<void> => {
  const {id_item} = req.params;
  try {
    const checkIfExist = await pool.query(queryMonetizacionItemById, [id_item]);
    if (checkIfExist.rowCount === 0) {
      res.status(404).json({ message: `No existe un ITEM con el ID ${id_item}` });
    }else{
      const result = await pool.query(queryDeleteItemMonetizacion, [id_item]);
      res.status(200).json(result.rows);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar ITEM" });
  }
};
