import express from 'express'; 
import dotenv from 'dotenv'; 
import pkg from 'pg'; 
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';


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

app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json())

const expressServer = http.createServer(app); 
//SECURITY ISSUE IN CORS. 
const io = new Server(expressServer, {
  cors: {
    origin: '*', 
    methods: ["GET", "POST"],
  }
});

io.on('connection', socket => {
  console.log(`User ${socket.id} connected`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  })

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  })


  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected.`);
  })
})


client.connect()
  .then(console.log("DB Connected!"))
  .then(expressServer.listen(7776, () => {
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
      console.log(req.body);
      //pp no work still, in progress
      const {userid, fname, lname, gender, age, specialization, yearstanding, introduction, livinghabits, profilepicture} = req.body;
      const newAge = parseInt(age);
      pool.query(`
        insert into description (userid, fname, lname, gender, age, specialization, yearstanding, introduction, livinghabits, profilepicture)
        values (${userid}, '${fname}', '${lname}', '${gender}', ${newAge}, '${specialization}', ${yearstanding}, '${introduction}', '${livinghabits}', '${profilepicture}')
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

  app.post("/userprofile", async (req, res) => {
    try {
      const {userid} = req.body; 
      pool.query(`select * from description where userid = ${userid}`, (err, resp) => {
        if (err) {
          return res.json({success: false, message: "Error, something occured, please try again."}); 
        } else {
          return res.json({success: true, data: resp.rows[0]});
        }
      })
    } catch (err) {
      console.log(err);
    }
  }) 


