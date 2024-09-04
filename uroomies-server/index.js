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
    console.log(client.query(`SELECT * from userprofile`, async (err, res) => {
      if (err) {
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
    const { username, name, email, password } = await req.body;
    pool.query(`
        insert into userprofile(username, name, email, password)
        values ('${username}', '${name}', '${email}','${password}');`, (err, resp) => {
      if (err) {
        return res.json({ success: false })
      } else {
        pool.query(`SELECT * FROM userprofile u WHERE u.email = '${email}' AND u.password = '${password}' `, (err, resp) => {
          if (err) {
            console.log(err);
          } else {
            if (resp.rows.length == 0) {
              return res.json({ success: false });
            } else {
              return res.json({ success: true, data: resp.rows[0] });
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
    const { email, password } = req.body;
    pool.query(`SELECT * FROM userprofile u WHERE u.email = '${email}' AND u.password = '${password}' `, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        if (resp.rows.length == 0) {
          return res.json({ success: false });
        } else {
          return res.json({ success: true, data: resp.rows[0] });
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
    const { userid, fname, lname, gender, age, specialization, yearstanding, introduction, livinghabits, profilepicture } = req.body;
    const newAge = parseInt(age);
    pool.query(`
        insert into description (userid, fname, lname, gender, age, specialization, yearstanding, introduction, livinghabits, profilepicture)
        values (${userid}, '${fname}', '${lname}', '${gender}', ${newAge}, '${specialization}', ${yearstanding}, '${introduction}', '${livinghabits}', '${profilepicture}')
        `, (err, resp) => {
      if (err) {
        return res.json({ success: false, message: "Error, something occured, please try again." });
      } else {
        return res.json({ success: true, message: "Successful profile creation!" })
      }
    })

  } catch (err) {
    console.log(err);
  }
})

app.post("/userprofile", async (req, res) => {
  try {
    console.log(req.body);
    const { userid } = req.body;

    if (!userid) {
      return res.json({ success: false, message: "User Id is required" });
    }

    const query = `SELECT * FROM description WHERE userid = $1`;
    const values = [userid];

    pool.query(query, values, (err, result) => {
      if (err) {
        console.error("Query error", err);
        return res.json({ success: false, message: "Error, something occured, please try again." });
      } else {
        console.log(result.rows[0]);
        return res.json({ success: true, data: result.rows[0] });
      }
    })
  } catch (err) {
    console.log(err);
  }
});

app.put("/editprofile", async (req, res) => {
  try {
    console.log(req.body);
    //pp no work still, in progress
    const { userid, fname, lname, gender, age, specialization, yearstanding, introduction, livinghabits, profilepicture } = req.body;
    const newAge = parseInt(age);
    pool.query(`
        update description
        set fname = '${fname}', lname = '${lname}', gender = '${gender}', age = ${newAge}, specialization = '${specialization}', yearstanding = ${yearstanding}, introduction = '${introduction}', livinghabits = '${livinghabits}'
        where userid = ${userid};
        `, (err, resp) => {
      if (err) {
        return res.json({ success: false, message: "Error, something occured, please try again." });
      } else {
        return res.json({ success: true, message: "Successful profile edit!" })
      }
    })

  } catch (err) {
    console.log(err);
  }
})

app.post("/searchroommates", async (req, res) => {
  try {
    console.log(req.body);
    const { age, ageRange, gender, major } = req.body;
    const newAge = parseInt(age);
    const ageLower = newAge - ageRange;
    const ageHigher = newAge + ageRange;
    if (gender.noPreference) {
      pool.query(`
        select *
        from userprofile 
        inner join description on userprofile.userid = description.userid
        where age <= ${ageHigher} AND age >= ${ageLower} AND specialization = '${major}';
        `, (err, resp) => {
        if (err) {
          console.log("error no pref");
          return res.json({ success: false, message: "Error, something occured, please try again." });
        } else {
          return res.json({ success: true, data: resp.rows });
        }
      })
    } else {
      //M
      if (gender.male && !gender.female && !gender.other) {
        pool.query(`
          select *
          from userprofile 
          inner join description on userprofile.userid = description.userid
          where age <= ${ageHigher} AND age >= ${ageLower} AND gender = 'Male' AND specialization = '${major}';
          `, (err, resp) => {
          if (err) {
            console.log("error M");
            return res.json({ success: false, message: "Error, something occured, please try again." });
          } else {
            if(resp.rows.length === 0) {
              return res.json({success: false, message: "No people found"});
            } else {
              return res.json({ success: true, data: resp.rows });
            }
          }
        })
      }
      //F
      if (gender.female && !gender.male && !gender.other) {
        pool.query(`
          select *
          from userprofile 
          inner join description on userprofile.userid = description.userid
          where age <= ${ageHigher} AND age >= ${ageLower} AND gender = 'Female' AND specialization = '${major}';
          `, (err, resp) => {
          if (err) {
            console.log("error F");
            return res.json({ success: false, message: "Error, something occured, please try again." });
          } else {
            if(resp.rows.length === 0) {
              return res.json({success: false, message: "No people found"});
            } else {
              return res.json({ success: true, data: resp.rows });
            }
          }
        })
      }
      //O
      if (!gender.female && !gender.male && gender.other) {
        pool.query(`
          select *
          from userprofile 
          inner join description on userprofile.userid = description.userid
          where age <= ${ageHigher} AND age >= ${ageLower} AND gender = 'Female' AND specialization = '${major}';
          `, (err, resp) => {
          if (err) {
            console.log("error O");
            return res.json({ success: false, message: "Error, something occured, please try again." });
          } else {
            if(resp.rows.length === 0) {
              return res.json({success: false, message: "No people found"});
            } else {
              return res.json({ success: true, data: resp.rows });
            }
          }
        })
      }
      //MF
      if (gender.male && gender.female && !gender.other) {
        pool.query(`
          select *
          from userprofile 
          inner join description on userprofile.userid = description.userid
          where age <= ${ageHigher} AND age >= ${ageLower} AND specialization = '${major}' EXCEPT
          (select * from userprofile 
          inner join description on userprofile.userid = description.userid
          where gender = 'Other');
          `, (err, resp) => {
          if (err) {
            console.log("error MF");
            return res.json({ success: false, message: "Error, something occured, please try again." });
          } else {
            if(resp.rows.length === 0) {
              return res.json({success: false, message: "No people found"});
            } else {
              return res.json({ success: true, data: resp.rows });
            }
          }
        })
      }
      //MO
      if (gender.male && !gender.female && gender.other) {
        pool.query(`
          select *
          from userprofile 
          inner join description on userprofile.userid = description.userid
          where age <= ${ageHigher} AND age >= ${ageLower} AND specialization = '${major}' EXCEPT
          (select * from userprofile 
          inner join description on userprofile.userid = description.userid
          where gender = 'Female');
          `, (err, resp) => {
          if (err) {
            console.log("error MO");
            return res.json({ success: false, message: "Error, something occured, please try again." });
          } else {
            if(resp.rows.length === 0) {
              return res.json({success: false, message: "No people found"});
            } else {
              return res.json({ success: true, data: resp.rows });
            }
          }
        })
      }
      //FO
      if (!gender.male && gender.female && gender.other) {
        pool.query(`
          select *
          from userprofile 
          inner join description on userprofile.userid = description.userid
          where age <= ${ageHigher} AND age >= ${ageLower} AND specialization = '${major}' EXCEPT
          (select * from userprofile 
          inner join description on userprofile.userid = description.userid
          where gender = 'Male');
          `, (err, resp) => {
          if (err) {
            console.log("error FO");
            return res.json({ success: false, message: "Error, something occured, please try again." });
          } else {
            if(resp.rows.length === 0) {
              return res.json({success: false, message: "No people found"});
            } else {
              return res.json({ success: true, data: resp.rows });
            }
          }
        })
      }
      //MFO
      if (gender.male && gender.female && gender.other) {
        pool.query(`
          select *
          from userprofile 
          inner join description on userprofile.userid = description.userid
          where age <= ${ageHigher} AND age >= ${ageLower} AND specialization = '${specialization}';
          `, (err, resp) => {
          if (err) {
            console.log("error MFO");
            return res.json({ success: false, message: "Error, something occured, please try again." });
          } else {
            return res.json({ success: true, data: resp.rows });
          }
        })
      }


    }
  } catch (err) {
    console.log(err);
  }


})


