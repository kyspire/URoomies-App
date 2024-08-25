import express from 'express'; 
import dotenv from 'dotenv'; 
import pkg from 'pg'; 


dotenv.config();
//const PORT = process.env.PORT; 
//const PASSWORD = process.env.PASSWORD;
//env better, but it keeps crashing idk why
const { Client } = pkg; 
const client = new Client({
  host: "localhost", 
  user: "postgres", 
  port: 5432, 
  password: "password", 
  database: "URoomies"
})


const app = express(); 

client.connect()
  .then(console.log("DB Connected!"))
  .then(app.listen(7776, () => {
    console.log(`Server is listening on port 7776`);
  }))
  .catch((err) => {
    console.log(err);
  })

