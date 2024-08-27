import express from 'express'; 
import pkg from 'pg'; 


const { Client } = pkg; 
const client = new Client({
  host: "localhost", 
  user: "postgres", 
  port: 5432, 
  password: "password", 
  database: "URoomies"
})
const router = express.Router();

router.post("/", async(req, res) => {
  try {
    const {username, name, email, password} = await req.body; 
    const login = await client.query(`
      insert into userprofile(username, name, email, password, profilepicture)
      values (${username}, ${name}, ${email}, ${password}, NULL);
      `); 
    console.log(login);

  } catch (err) {
    console.log(err);
  }
})

export default router; 