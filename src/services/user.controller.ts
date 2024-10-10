import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import pool from "../database/db";
import { CreateUser } from "../global/create.interface";  
import { idUser } from "../global/create.interface";
import {
  queryCreateNewUser,
  queryGetUsers,
  queryGetUserById,
  queryUpdateUserAuthentication,
  queryDeleteUserAuthentication
} from "../querys/query.user";

// get users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(queryGetUsers);
   if (result.rowCount === 0) {
    res.status(200).json({ message: "No hay resultados" });
   }else{
    res.status(200).json(result.rows);
   }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

// get users by id
export const getUserById = async (
    req: Request<idUser, {}, {}>,
    res: Response) => {
  const { id_user } = req.params;
  try {
    const result = await pool.query(queryGetUserById, [id_user]);
    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ message: `No existe un usuario con el ID ${id_user}` });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el usuario" });
  }
};

//create new user para ingreso a la api
export const createNewUser = async (
  req: Request<{}, {}, CreateUser>,
  res: Response
) => {
  const { id_user,user_authentication, password_authentication, rol_user } =
    req.body;
  try {
    if (!id_user || !password_authentication || !rol_user) {
      res.status(404).json({ message: "Faltan datos requeridos" });
    } else {
     const resultone = await pool.query(queryGetUserById, [id_user]);
        if (resultone.rowCount === 0) {
            const isPasswordValig = await bcrypt.hash(password_authentication, 10);
            const result = await pool.query(queryCreateNewUser, [
              id_user,
              user_authentication,
              isPasswordValig,
              rol_user,
            ]);
            res.status(201).json(result.rows[0]);
          }else{
            res.status(404).json({ message: `Ya existe un usuario con el ID ${id_user}` });
        }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};

//update user authentication
export const updateUserAuthentication = async (
  req: Request<{}, {}, CreateUser>,
  res: Response
) => {
  const { id_user, user_authentication, password_authentication, rol_user } =
    req.body;
  try {
    if (!user_authentication || !password_authentication || !rol_user) {
      res.status(404).json({ message: "Faltan datos requeridos" });
    } else {
      const isPasswordValig = await bcrypt.hash(password_authentication, 10);
      const result = await pool.query(queryUpdateUserAuthentication, [
        user_authentication,
        rol_user,
        id_user,
      ]);
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

//delete user authentication
export const deleteUserAuthentication = async (
  req: Request<idUser, {}, {}>,
  res: Response
) => {
  const { id_user } = req.params;
  try {
    const result = await pool.query(queryDeleteUserAuthentication, [id_user]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};