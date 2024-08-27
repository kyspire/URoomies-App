import express from 'express'; 
import dotenv from 'dotenv'; 
import pkg from 'pg'; 
import signInRoute from "./routes/signInRoute.js";
import cors from 'cors';


dotenv.config();
//const PORT = process.env.PORT; 
//const PASSWORD = process.env.PASSWORD;
//env better, but it keeps crashing idk why
const { Client, Pool } = pkg; 
const client = new Client({
  host: "localhost", 
  user: "postgres", 
  port: 5432, 
  password: "password", 
  database: "URoomies"
})

const pool = new Pool({
  user: "postgres", 
  host: "localhost", 
  database: "URoomies", 
  password: "password", 
  port: 5432
})


const app = express(); 

client.connect()
  .then(console.log("DB Connected!"))
  .then(app.listen(7776, () => {
    console.log(`Server is listening on port 7776`);
    console.log(client.query(`SELECT * from userprofile`, async(err, res) => {
      if(err) {
        console.log(err);
      } else {
        console.log(res.rows)
      }
    }));
  }))
  .then()
  .catch((err) => {
    console.log(err);
  })

  app.use(cors({
    origin: "http://localhost:5173"
  }))
  app.use(express.json())

  // app.use("/login", signInRouter);

  app.post("/signup", async (req, res) => {
    try {
      const {username, name, email, password} = await req.body; 
      pool.query(`
        insert into userprofile(username, name, email, password, profilepicture)
        values ('${username}', '${name}', '${email}','${password}', NULL);`, (err, res) => {
          console.log(err, res); 
          pool.end();
        }); 

  
    } catch (err) {
      console.log(err);
    }
  })


