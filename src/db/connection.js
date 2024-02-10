import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;

export const connection = () => {
  try {
    mongoose.connect(uri);
    console.log("Conectado com sucesso ao banco de dados");
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados", error);
  }
};
