const express = require("express");

const mysql = require('mysql');

const cors = require('cors');

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

const session = require('express-session'); 


const { check, validationResult, body, Result } = require('express-validator');


const Router= express.Router();





const app = express();


app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST", "GET", "PUT","DELETE"],
    credentials:true
}));

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.json());

app.use(express.json());

app.use(session({
    secret:'secret', //qeles sekret per mi enkriptu session ccookies
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000*60*60*24
    }
}))

const db = mysql.createConnection({ 
    host: "localhost",
    user: "root",
    password: "",
    database: "signup",
    port:4306
});

app.get('/',(req,res)=> {
    if(req.session.role){
        return res.json({valid:true,role:req.session.role})
    } else{
        return res.json({valid:false})
    }
})

app.get('/logout' , (req,res)=>{
    req.session.destroy();
    return res.json("success")
})

    db.connect((error)=>{
        if (error){
            console.log('Error konekt databaza',error);
        }
        else{
            console.log('U konektu me sukses')
        }
    });



    app.get("/get/Regjistro", (req,res)=>{
        const sql= `SELECT * FROM login`;
    
        db.query(sql, (err, row)=>{
        if(!err)
        {
            res.send(row);

        } else{
            console.log(err);
        }

    });

});

        

    app.get('/get/Regjistro/:email', (req, res) => {
        
        const sql = "SELECT * FROM login where email = ?";
        const email = req.params.email;
        db.query(sql,  [email], (err, result) => {
            if(err) return res.json({Error: "Get Student error in sql"});
            return res.json({Status: "Success", Result: result})
        })
    })

    app.put('/update/get/Regjistro/:email', (req, res) => {
        const sql = "UPDATE login set name = ?, nameParent = ? , nr = ? , ditlindja = ? WHERE email = ?";
        const values = [ 
                 req.body.name,
                 req.body.nameParent ,
                 req.body.nr,
                 req.body.ditlindja 
                   ] 
           const email = req.params.email;
            db.query(sql, [...values, email], (err, data) => {
                              if(err) return res.json("Error");
                               return res.json(data);    })})
                        app.delete('/get/Regjistro/:email', (req, res) => { 
                          const sql = "DELETE FROM login WHERE email = ?";
                          const email = req.params.email;
                          db.query(sql, [email], (err, data) => { 
                              if(err) return res.json("Error"); 
                               return res.json(data); 
                              
                              })})



app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`nameParent`,`nr`,`ditlindja`,`email`,`password`) VALUES (?)";
    const values = [ req.body.name,req.body.nameParent,req.body.nr,req.body.ditlindja,req.body.email,req.body.password ]  
    
    db.query(sql, [values], (err, data) => { 
        if(err) { 
        return res.json("Error");
    }       
     return res.json(data);   
    
    })})


    app.post('/login', (req, res) => {
        const sql = "SELECT * FROM login WHERE email = ? AND password = ?";    
        db.query(sql, [req.body.email,req.body.password ], (err, data) => {
            const errors = validationResult(req);
             if(!errors.isEmpty()) { 
                 return res.json(errors);  
                 } else {  
                     if(err) {   
                         return res.json("Error");    
                         }  
                         if(data.length > 0) { 
                            req.session.role=data[0].role;
                            req.session.email = req.body.email;
                             return res.json({Login:true});   
                             } else {  
                                return res.json({Login:false}); 
                            }    
                        }    
                      })})

                      app.get('/profile', (req, res) => {
                        if (req.session.email) {
                          const email = req.session.email;
                      
                          // Query the database to retrieve the user's personal information using their email
                          const sql = "SELECT * FROM login WHERE email = ?";
                          db.query(sql, [email], (err, userData) => {
                            if (err) {
                              return res.status(500).json({ error: 'Server error' });
                            }
                      
                            if (userData.length === 0) {
                              return res.status(404).json({ error: 'User not found' });
                            }
                      
                            // Send the user's email as a response
                            const user = userData[0];
                            return res.status(200).json({ email: user.email });
                          });
                        } else {
                          return res.status(401).json({ error: 'Unauthorized' });
                        }
                      });



                                                      app.get("/publikoPunen", (req, res) => {
                                                        const sql = "SELECT * FROM provimi p INNER JOIN login l ON p.studID=l.id";
                                                         db.query(sql, (err, data) => { 
                                                          if(err) return res.json("Error");
                                                           return res.json(data);    });});
                                                              app.post('/createPunen', (req, res) => {
                                                                  const sql = "INSERT INTO provimi (lenda, emriProfesorit,studID) VALUES (?)";
                                                                  const values = [ 
                                                                      req.body.lenda, 
                                                                      req.body.emriProfesorit ,
                                                                      req.body.idStud
                                                                  ]    
                                                                  db.query(sql, [values], (err, data) => { 
                                                                      if(err) return res.json("Error"); 
                                                                      return res.json(data);   
                                                                   })})
                                                  
                                                       app.put('/update/:idProvimi', (req, res) => {
                                                        const sql = "UPDATE provimi set lenda = ?, emriProfesorit = ?,nota = ? WHERE idProvimi = ?";
                                                        const values = [ 
                                                                 req.body.lenda,
                                                                 req.body.emriProfesorit,
                                                                 req.body.nota
                                                                   ] 
                                                           const idProvimi = req.params.idProvimi;
                                                            db.query(sql, [...values, idProvimi], (err, data) => {
                                                                              if(err) return res.json("Error");
                                                                               return res.json(data);    })})
                                                                        app.delete('/publikoPunen/:idProvimi', (req, res) => { 
                                                                          const sql = "DELETE FROM provimi WHERE idProvimi = ?";
                                                                          const idProvimi = req.params.idProvimi;
                                                                          db.query(sql, [idProvimi], (err, data) => { 
                                                                              if(err) return res.json("Error"); 
                                                                               return res.json(data); 
                                                                            })})

                                        
                                                                          
            

                //---------------------------------------------------------------------------------------------------------------



                app.get("/aplikoPerPune", (req, res) => {
                    const sql = "SELECT * FROM semestri s INNER JOIN login l ON s.idStudent=l.id";
                     db.query(sql, (err, data) => { 
                      if(err) return res.json("Error");
                       return res.json(data);    });});
                          app.post('/createSemestri', (req, res) => {
                              const sql = "INSERT INTO semestri (lokacioni,semestri,orari,idStudent) VALUES (?)";
                              const values = [ 
                                  req.body.lokacioni,
                                  req.body.semestri,
                                  req.body.orari,
                                  req.body.idStudent

                              ]    
                              db.query(sql, [values], (err, data) => { 
                                  if(err) return res.json("Error"); 
                                  return res.json(data);   
                               })})
              
                   app.put('/update/:id', (req, res) => {
                    const sql = "UPDATE semestri set lokacioni = ?, semestri = ?,orari = ? WHERE id = ?";
                    const values = [ 
                             req.body.lokacioni,
                             req.body.semestri,
                             req.body.orari
                               ] 
                       const id = req.params.id;
                        db.query(sql, [...values, id], (err, data) => {
                                          if(err) return res.json("Error");
                                           return res.json(data);    })})
                                    app.delete('/aplikoPerPune/:id', (req, res) => { 
                                      const sql = "DELETE FROM semestri WHERE id = ?";
                                      const id = req.params.id;
                                      db.query(sql, [id], (err, data) => { 
                                          if(err) return res.json("Error"); 
                                           return res.json(data); 
                                        })})















                                                                              
app.listen(8081, ()=> {    console.log("listening");})