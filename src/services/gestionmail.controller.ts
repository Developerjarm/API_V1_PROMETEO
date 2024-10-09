import pool from "../database/db";
import { Request, Response } from "express";
import {
  queryGetItemsGestionMail,
  queryGetItemsGestionMailById,
  queryGetItemsGestionMailByNme,
  queryCreateItemGestionMail,
  queryUpdateItemGestionMail,
  queryDeleteItemGestionMail,
} from "../querys/query.gestionmail";
import {CreateItems,ReqId} from '../global/create.interface'

//OBTENER ITEMS GESTION DE CORREO
export const getItemGestionMail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await pool.query(queryGetItemsGestionMail);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error al obtener los ITEMS de gestiones correo" });
  }
};

//OBTENER ITEM POR EL id
export const getItemGestionMailById = async (
  req: Request<ReqId,{},{}>,
  res: Response
): Promise<void> => {
  const id = req.params.id_item;
  try {
    const result = await pool.query(queryGetItemsGestionMailById, [id]);
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No se encontro ningun ITEM con el ID ${id} ` });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el ITEM" });
  }
};

//CREAR NUEVO RESGISTRO DE gestion de correo
export const createItemGestionMail = async (
  req: Request<ReqId,{},CreateItems>,
  res: Response
): Promise<void> => {
  const { name_item } = req.body;
  try {
    const name_gestionmailIfExist = await pool.query(
      queryGetItemsGestionMailByNme,
      [name_item]
    );
    if (name_gestionmailIfExist.rows.length >= 1) {
      res.status(200).json({
        message: `Ya existe un Item con el nombre ${name_item} `,
      });
    } else {
      const result = await pool.query(queryCreateItemGestionMail, [
        name_item,
      ]);
      res.status(201).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error al crear ITEM de gestion de correo" });
  }
};

//ACTUALIZAR NOMBRE DE GESTION DE ITEM
export const updateItemGestionMail = async (
  req: Request<ReqId,{},CreateItems>,
  res: Response
): Promise<void> => {
  const id = req.params.id_item;
  const { name_item } = req.body;
  try {
    const result = await pool.query(queryUpdateItemGestionMail, [
      name_item,
      id,
    ]);
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No se encontro ningum item con el ID ${id}` });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error al actualizar ITEM error: ${error} ` });
  }
};

//BORRAR ITEM POR EL id

export const deleteItemGestionMail = async (
  req: Request<ReqId,{},{}>,
  res: Response
): Promise<void> => {
  const id = req.params.id_item;
  try {
    const result = await pool.query(
      queryDeleteItemGestionMail,
      [id]
    );
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No se encontro un registro con el id ${id} ` });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Erro al eliminar el ITEM  error: ${error} ` });
  }
};
