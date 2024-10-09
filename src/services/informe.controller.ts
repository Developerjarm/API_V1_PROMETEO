import { Request, Response } from "express";
import { getColombiaDate } from "../global/date.global";
import pool from "../database/db";
import { InformeCreate, ReqId } from "../global/create.interface";
import {
  queryGetInformeById,
  queryCreateInformeResgister,
  queryUpdateRegisterInforme,
  queryDeleteRegisterInforme,
  queryInforme,
  queryInformeByDate,
  queryInformeByAgentAndDate,
} from "../querys/query.informe";



//get informe sin filter
export const getInforme = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(queryInforme);
    res.status(200).json(result.rows);
    console.log(getColombiaDate());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error al obtener el informe` });
  }
};

//get informe filter by date and date
export const getInformeByDate = async (req: Request, res: Response) => {
  const date_init = req.query.date_init as string;
  const date_end = req.query.date_end as string;
  try {
    let date_init_parsed = new Date(date_init as string);
    let date_end_parsed = new Date(date_end as string);

    if (date_end_parsed < date_init_parsed) {
      res
        .status(200)
        .json({ message: "la fecha final debe ser mayor a la inicial" });
    } else {
      const result = await pool.query(queryInformeByDate, [
        date_init,
        date_end,
      ]);
      res.status(200).json(result.rows);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error al obtener el informe` });
  }
};

//get informe filter by agent and date
export const getInformeByAgentAndDate = async (req: Request, res: Response) => {
  const { name_agent } = req.query;
  const date = getColombiaDate();
  try {
    if (!name_agent) {
      res
        .status(404)
        .json({ message: "Se debe ingresar un agente y una fecha" });
    } else {
      const result = await pool.query(queryInformeByAgentAndDate, [
        name_agent,
        date,
      ]);
      res.status(200).json(result.rows);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al ontener el informe" });
  }
};

// get informe By ID uuid
export const getInformeBiId = async (
  req: Request<ReqId,{},{}>,
  res: Response) => {
  const { id_item } = req.params;
  const result = await pool.query(queryGetInformeById, [id_item]);
  try {
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No existe un registro con el ID ${id_item}` });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al realizar la consulta" });
  }
};



//create register informe
export const createInformeResgister = async (req: Request, res: Response) => {
  const {
    id_agent,
    id_gestionmail,
    id_typecause,
    id_client,
    pos_tienda,
    id_marca,
    value_monetizacion,
    id_monetizacion,
    id_supervisor,
    ticket_mesa,
    ticket_secon_level,
  } = req.body;
  try {
    const result = await pool.query(queryCreateInformeResgister, [
      id_agent,
      id_gestionmail,
      id_typecause,
      id_client,
      pos_tienda,
      id_marca,
      value_monetizacion,
      id_monetizacion,
      id_supervisor,
      ticket_mesa,
      ticket_secon_level,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error al crear el registro` });
  }
};

//update register informe
export const UpdateInformeResgister = async (
  req: Request<ReqId, {}, InformeCreate>,
  res: Response
) => {
  const {
    id_agent,
    id_gestionmail,
    id_typecause,
    id_client,
    pos_tienda,
    id_marca,
    value_monetizacion,
    id_monetizacion,
    id_supervisor,
    ticket_mesa,
    ticket_secon_level,
  } = req.body;
  const { id_item } = req.params;
  try {
    const ifExistuuid = await pool.query(queryGetInformeById, [id_item]);
    if (ifExistuuid.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No existe un registro con el ID ${id_item}` });
    } else {
      const result = await pool.query(queryUpdateRegisterInforme, [
        id_agent,
        id_gestionmail,
        id_typecause,
        id_client,
        pos_tienda,
        id_marca,
        value_monetizacion,
        id_monetizacion,
        id_supervisor,
        ticket_mesa,
        ticket_secon_level,
        id_item,
      ]);
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Error al crear el registro` });
  }
};


//delete register informe
export const deleteInformeResgister = async (
  req: Request<ReqId,{},{}>, 
  res: Response) => {
    const { id_item } = req.params;
    try {
      const ifExistuuid = await pool.query(queryGetInformeById, [id_item]);
      if (ifExistuuid.rowCount === 0) {
        res
          .status(404)
          .json({ message: `No existe un registro con el ID ${id_item}` });
      } else {
        const result = await pool.query(queryDeleteRegisterInforme, [id_item]);
        res.status(200).json(result.rows[0]);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: `Error al eliminar el registro` });
    }
  }
