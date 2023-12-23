import express, { response } from 'express';
const api = express()

api.use(express.json())
api.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

import dotenv from 'dotenv';
import mongoose from 'mongoose'

dotenv.config()
const { PASSWORD } = process.env;

const con = `mongodb+srv://root:${PASSWORD}@cluster0.gyept23.mongodb.net/`;

api.listen(3000, () => {
    console.log(`http://localhost:3000`)
    mongoose.connect(con, {dbName: 'AthleteClub'})
    .catch((err) => {
        console.log("Error connecting to database: ", err)
      })
})