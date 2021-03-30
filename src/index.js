// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route} from 'react-router-dom'
// import App from './App';
// import Producten from './components/Producten'
// import Bestelijst from './components/Bestellijst'
// import reportWebVitals from './reportWebVitals';
//
// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require("cors");
//
// app.use(cors());
// app.use(express.json());
//
//
//
// const db = mysql.createConnection({
//     user: 'sql11398825',
//     host: 'sql11.freemysqlhosting.net',
//     password: 'QDRHLwuDZE',
//     database: 'sql11398825'
// });
//
// app.post("/create", (req, res) => {
//   const naam = req.body.Naam;
//   const artikkelNummer = req.body.ArtikkelNummer;
//   const minimaleVoorraad = req.body.MinimaleVoorraad;
//
//   db.query(
//     "INSERT INTO Bestellingen (Naam, Artikelnummer, MinimaleVooraad, ActueleVoorraad) VALUES (?,?,?,?)",
//     [naam, artikkelNummer, minimaleVoorraad, 0],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });
//
// app.get("/moonen", (req, res) => {
//   db.query("SELECT * FROM Bestellingen", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
//
// app.get("/getData", (req, res) => {
//   db.query("SELECT * FROM Bestellingen", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
//
// app.put("/updateArtikkelNummer", (req, res) => {
//   const an = req.body.artikkelnummer;
//   const artikkelNummer = req.body.Number;
//
//   db.query(
//     "UPDATE Bestellingen SET Artikelnummer = ? WHERE Artikelnummer = ?",
//     [an, artikkelNummer],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
//
// app.put("/updateMinimaleVoorraad", (req, res) => {
//   const voorraad = req.body.MinimaleVooraad;
//   const artikkelNummer = req.body.Number;
//
//   db.query(
//     "UPDATE Bestellingen SET MinimaleVooraad = ? WHERE Artikelnummer = ?",
//     [voorraad, artikkelNummer],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
//
// app.put("/updateVoorraad", (req, res) => {
//   const voorraad = req.body.voorraad;
//   const artikkelNummer = req.body.Number;
//
//   db.query(
//     "UPDATE Bestellingen SET ActueleVoorraad = ? WHERE Artikelnummer = ?",
//     [voorraad, artikkelNummer],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
//
// app.delete("/delete/:ArtikkelNummer", (req, res) => {
//   const ArtikkelNummer = req.body.Artikelnummer;
//   db.query("DELETE FROM Bestellingen WHERE Artikelnummer = ?", [ArtikkelNummer], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
//   db.close();
// });
//
// app.listen(3001, () => {
//   console.log("Yey, your server is running on port 3001");
// });
//
// const routing = (
//     <Router>
//         <div>
//             <Route path="/" exact component={App} />
//             <Route path="/producten" exact component={Producten} />
//             <Route path="/bestellijst" exact component={Bestelijst} />
//         </div>
//     </Router>
// )
//
// ReactDOM.render(
//    routing,
//     document.getElementById('root')
// );
//
// reportWebVitals();