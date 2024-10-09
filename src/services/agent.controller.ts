import pool from "../database/db";
import { Request, Response } from "express";
import {
  queryGetAgenteItem,
  queryGetAgenteItemById,
  queryGetAgenteItemByName,
  queryCreateAgenteItem,
  queryUpdateAgenteItem,
  queryDeleteAgenteItem,
} from "../querys/query.agente";
import {CreateItems,ReqId} from '../global/create.interface'
//OBTENER AGENTES DESDE BD
export const getAgent = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query(queryGetAgenteItem);
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error al obtener los agentes" });
  }
};
//OBTENER AGENTE POR MEDIO DE SU ID(UUID)
export const getAgentById = async (
  req: Request<ReqId,{},{}>,
  res: Response
): Promise<void> => {
  const {id_item} = req.params;
  try {
    const result = await pool.query(queryGetAgenteItemById, [
      id_item,
    ]);
    if (result.rows.length === 0) {
      res
        .status(404)
        .json({ message: `No se encontro ningun agente con el ${id_item} ` });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el agente" });
  }
};
//CREAR AGENTE PASANDO EL PARAMETRO name_agent
export const createAgent = async (
  req: Request<{},{},CreateItems>,
  res: Response
): Promise<void> => {
  const { name_item } = req.body ;
  try {
    const resultOne = await pool.query(queryGetAgenteItemByName, [name_item]);
    if (resultOne.rows.length >= 1) {
      res.status(500).json({ message: `Ya existe un ITEM con el nombre ${name_item} ` });
    } else {
      const result = await pool.query(queryCreateAgenteItem, [name_item]);
      res.status(201).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al registrar agente" });
  }
};

//ACTUALIZAR NOMBRE DEL AGENTE PASANDO POR body EL NUEVO NOMBRE Y COMO PARAMETRO EL id
export const updateAgent = async (
  req: Request<ReqId,{},CreateItems>,
  res: Response
): Promise<void> => {
  const id = req.params.id_item;
  const { name_item } = req.body;
  try {
    const result = await pool.query(
      queryUpdateAgenteItem,
      [name_item, id]
    );
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No se encontro un agente con el ID ${id} ` });
    } else {
      const result = await pool.query(queryUpdateAgenteItem,[name_item,id])
      res.status(200).json({
        message: `Se actualizo el agente con ID (${id}) y nombre (${name_item}) `,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(204).json({ message: "Error al actualizar el agente" });
  }
};

//BORRAR INFORMACION DEL AGENTE PASANDOMPARAMETRO id
export const deleteAgent = async (
  req: Request<ReqId,{},{}>,
  res: Response
): Promise<void> => {
  const id = req.params.id_item;
  try {
    const result = await pool.query(
      queryDeleteAgenteItem,
      [id]
    );
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: "No se encontro ningun agente con el ID indicado" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el agente" });
  }
};
