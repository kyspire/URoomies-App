import express from 'express'; 
import dotenv from 'dotenv'; 
import pkg from 'pg'; 
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


  app.post("/signup", async (req, res) => {
    try {
      const {username, name, email, password} = await req.body; 
      pool.query(`
        insert into userprofile(username, name, email, password)
        values ('${username}', '${name}', '${email}','${password}');`, (err, resp) => {
          if(err) {
            return res.json({success: false})
          } else {
            pool.query(`SELECT * FROM userprofile u WHERE u.email = '${email}' AND u.password = '${password}' `, (err, resp) => {
              if(err) {
                console.log(err);
               } else {
                if(resp.rows.length == 0) {
                  return res.json({success: false});
                } else {
                  return res.json({success: true, data: resp.rows[0]});
                }
                //return res.send(resp.rows);
       
              }
            })
          }
        }); 
    } catch (err) {
      console.log(err);
    }
  })

  app.post("/login", async (req, res) => {
    try {
      const {email, password} = req.body; 
      pool.query(`SELECT * FROM userprofile u WHERE u.email = '${email}' AND u.password = '${password}' `, (err, resp) => {
        if(err) {
          console.log(err);
         } else {
          if(resp.rows.length == 0) {
            return res.json({success: false});
          } else {
            return res.json({success: true, data: resp.rows[0]});
          }
          //return res.send(resp.rows);
 
        }
      })
    } catch (err) {
      console.log(err);
    }
  })

  app.post("/profilesetup", async (req, res) => {
    try {
      const {userid, fname, lname, profilepicture, gender, age, specialization, yearstanding, introduction, livinghabits} = req.body;
      pool.query(`
        insert into description (userid, fname, lname, profilepicture, gender, age, specialization, yearstanding, introduction, livinghabits)
        values (${userid}, '${fname}', '${lname}', 'NULL', '${gender}', ${age}, '${specialization}', ${yearstanding}, '${introduction}', '${livinghabits}')
        `, (err, resp) => {
          if(err) {
            return res.json({success: false, message: "Error, something occured, please try again."}); 
          } else {
            return res.json({success: true, message: "Successful profile creation!"})
          }
        })

    } catch (err) {
      console.log(err); 
    }
  })


