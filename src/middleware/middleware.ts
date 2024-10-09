import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = '$2a$10$23RtLMKwkpcpr8xeMNOPXuGmia2haKKQAMzJlV7IU8cZBi7S2bha.';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
 res.status(401).json({ message: 'Token no proporcionado' });
 return
  }

  jwt.verify(token ?? '', SECRET_KEY, (err: any) => {
    if (err) {
     res.status(401).json({ message: 'Sesión cerrada. Token invalidado.' });
     return;
    }
    next();
  });
};


