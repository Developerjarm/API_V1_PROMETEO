import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../database/db";
import { Login } from "../global/create.interface";
import { queryUserNameAtuthentication } from "../querys/query.userName";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY =process.env.SECRET_KEY?.toString() || '$2a$10$23RtLMKwkpcpr8xeMNOPXuGmia2haKKQAMzJlV7IU8cZBi7S2bha.';

export const login = async (
    req: Request<{}, {}, Login>,
    res:Response) => {
const { username, password } = req.body;
try{
    const result = await pool.query(queryUserNameAtuthentication, [username]);
    const user  = result.rows[0];
    
    if(!user){
        res.status(404).json({message:"Credenciales incorrectas"})
    }
    
    const isPasswordValig = await bcrypt.compare(password, user.password_authentication);
    if(!isPasswordValig){
    res.status(404).json({message:"Credenciales incorrectas"})
    }
    
    const token = jwt.sign({id:user.id_user,user:user.user_authentication}, SECRET_KEY,{expiresIn:'8h'});
    res.status(200).json({token:token})
}catch(error){
    res.status(500).json({message:"Error al iniciar sesión"})
}

}
