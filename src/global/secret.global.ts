import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.locals.SECRET_KEY = '$2a$10$23RtLMKwkpcpr8xeMNOPXuGmia2haKKQAMzJlV7IU8cZBi7S2bha.';