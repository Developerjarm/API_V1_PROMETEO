import { Request, Response } from "express";
import pool from "../database/db";
import {
  queryGetMarcaItem,
  queryGetMarcaItemById,
  queryGetMarcaItemByName,
  queryCreateMarcaItem,
  queryUpdateMarcaItem,
  queryDeleteMarcaItem,
} from "../querys/query.marca";
import {CreateItems,ReqId} from '../global/create.interface'

//OBTENER MARCAS
export const getMarca = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query(queryGetMarcaItem);
    res.status(200).json(result.rows);
    pool.end;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los ITEMS marca" });
    pool.end;
  }
};

// OBTENER MRCA POR SI id
export const getMarcaById = async (
  req: Request<ReqId,{},{}>,
  res: Response
): Promise<void> => {
  const id = req.params.id_item;
  try {
    const result = await pool.query(queryGetMarcaItemById, [id]);
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No se encontro un ITEM con el ID ${id}` });
      pool.end;
    } else {
      res.status(200).json(result.rows);
      pool.end;
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el Item" });
    pool.end;
  }
};

//CREAR ITEM DE MARCA
export const createMarca = async (
  req: Request<ReqId,{},CreateItems>,
  res: Response
): Promise<void> => {
  const { name_item } = req.body;
  try {
    // Verifica si la marca ya existe
    const checkResult = await pool.query(queryGetMarcaItemByName, [name_item]);
    if (checkResult.rows.length >= 1) {
      res.status(404).json({ message: `Ya existe un ITEM con el nombre ${name_item} ` });
    } else {
      // Si no existe, realiza la inserción
      const result = await pool.query(
        queryCreateMarcaItem,
        [name_item]
      );
      res.status(201).json(result.rows);
      pool.end;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al ingresar nuevo item" });
    pool.end;
  }
};

//ACTUALIZAR NOMBRE ITEM MARCA

export const updateItemMarca = async (
  req: Request<ReqId,{},CreateItems>,
  res: Response
): Promise<void> => {
  const id = req.params.id_item;
  const { name_item } = req.body;
  try {
    const result = await pool.query(queryUpdateMarcaItem, [name_item, id]);
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No se encontro un ITEM con el ID ${id} ` });
      pool.end;
    } else {
      res.status(200).json(result.rows);
      pool.end;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "No se realizo la actualizacion" });
    pool.end;
  }
};

//BORRAR MARCA
export const deleteItemMarca = async (
  req: Request<ReqId,{},{}>,
  res: Response
): Promise<void> => {
  const id = req.params.id_item;
  try {
    const result = await pool.query(queryDeleteMarcaItem, [id]);
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No se encontro un ITEM con el ID ${id}` });
      pool.end;
    } else {
      res.status(200).json(result.rows);
      pool.end;
    }
  } catch (error) {
    res.status(500).json({ message: "Error al borrar el Item" });
    pool.end;
  }
};
