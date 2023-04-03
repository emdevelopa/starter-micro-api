const dotenv = require("dotenv");
dotenv.config()
const express = require("express");
// const mysql = require("mysql2");
const cors = require("cors");
const helmet = require("helmet")
const compression = require("compression")
const config = require("./config")
const http = require("http");
// const { constants } = require("buffer");
// const { response } = require("express");

const {port, allowedDomains} = config;
const app = express();

app.use(cors({origin:allowedDomains}))

app.use(helmet())

app.use(compression())

app.get('/',(req,res)=>{
  return res.send("heelo")
})

const server = http.createServer(app);

server.listen(port,()=>{
  console.log(`server runing on port ${port}`);
})


// app.use(express.json());
// app.use(cors());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "Never$give$up999",
//   database: "user_details",
// });
// db.connect((err) => {
//   if (err) {
//     console.log("Database Connection Failed !!!", err);
//   } else {
//     console.log("connected to Database");
//   }
// });





// app.post("/register", (req, respo) => {
  // const username = req.body.user;
  // const password = req.body.pwd;
  // //   res.send();
  // // console.log(username);
  // db.query("SELECT * FROM users Where Username = ?", [username], (err, res) => {
  //   // console.log(ret);
  //   if (err) {
  //     console.log("An error occured: ", err.message);
  //     respo
  //       .status(500)
  //       .json({ status: 500, message: "An error occured: " + err.message });
  //   } else {
  //     if (res.length) {
  //       console.log("User found successfully.");
  //       console.log(JSON.stringify(res));
  //       respo
  //         .status(409)
  //         .json({ status: 409, message: "User found successfully." });
  //     } else {
  //       console.log("User not found.");
  //       respo.status(404).send({ status: 404, message: "User not found." });
  //       db.query(
  //         "INSERT INTO users (Username,Password) VALUES (?,?)",
  //         [username, password],
  //         (err, result) => {
  //           console.log(err);
  //         }
  //       );
  //     }
  //   }
  // });
  // db.query(
  //   "INSERT INTO users (Username,Password) VALUES (?,?)",
  //   [username, password],
  //   (err, result) => {
  //     console.log(err);
  //   }
  // );
// });

// app.post("/uploadprop",(req,respp)=>{
//   const availableFor = req.body.availableFor;
//   const propertyPurpose = req.body.propertyPurpose;
//   const propertyType = req.body.propertyType;
//   const noOfBedroom = req.body.noOfBedroom;
//   const suitesNo = req.body.suites;
//   const story = req.body.story;
//   const landType =req.body.landType;
//   const landTypeInputValue = req.body.landTypeInput;
//   const numberOfFuelPumps = req.body.noOfFuelPumps;
//   const wareHouseInputValue = req.body.warehouseInput;
//   const hotelBlahBlahValue = req.body.hotelBlahBlah;
//   const state = req.body.state;
//   const LGA = req.body.LGA;
//   const nearestBusStop = req.body.nearestBusStop;
//   const streetName = req.body.streetName;
//   const buildingNumber = req.body.buildingNumber;
//   const price = req.body.price;
//   const budgetFrom = req.body.budgetFrom;
//   const budgetTo = req.body.budgetTo;
//   const inspection = req.body.inspection;
//   const timeFrom = req.body.timeFrom;
//   const timeTo = req.body.timeTo;
//   if (propertyPurpose === "Property Purpose" || availableFor ==="Available For?" || propertyType === "Property Type") {
//     console.log("empty");
//     respp.status(411).json({status:411, message:"Please Fill"})
//     // console.log(respp);
//   }else{
//   db.query(
//     "SELECT * FROM props WHERE AvailableFor = ? AND property_purpose = ? AND property_type = ? AND no_of_bedroom = ? AND no_of_suites = ?",[availableFor,propertyPurpose,propertyType,noOfBedroom,suitesNo],(err, result) => {
//       if (err) {
//         console.log("An error occured: ", err.message);
//         respp
//           .status(500)
//           .json({ status: 500, message: "An error occured: " + err.message });
//       }else{
//         if(result.length >0){
//           console.log("Property found successfully.");
          
//         // console.log(JSON.stringify(result));
//         respp
//           .status(409)
//           .json({ status: 409, message: "User found successfully." });
//         }else{
//           console.log("Property not found.");
//           // console.log(type);
//           respp.status(400).send({ status: 400, message: "Property not found." });
//           console.log(availableFor);
      
//           db.query(
//             "INSERT INTO props (AvailableFor,property_purpose,property_type,no_of_bedroom,no_of_suites,no_of_story,land_type,no_of_plotAcresHectres,no_of_fuelPumps,no_of_warehouse_in_square_meter,no_of_hotelrooms,state,LGA,nearestBusStop,streetName,buildingNumber,price,budgetFrom,budgetTo,inspection,timeFrom,timeTo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
//             [availableFor,propertyPurpose,propertyType,noOfBedroom,suitesNo,story,landType,landTypeInputValue,numberOfFuelPumps,wareHouseInputValue,hotelBlahBlahValue,state,LGA,nearestBusStop,streetName,buildingNumber,price,budgetFrom,budgetTo,inspection,timeFrom,timeTo],
//             (err, result) => {
//               console.log(err);
//               // console.log(respp.length);
//             }
//           );
//         }
//       }
//       // console.log(type);
//     }
    
//   );
// }
// })

// app.post("/searchProperty",(req,respon)=>{
//   const g = req.body.availableFor;
//   console.log(g);
//   db.query("SELECT * FROM props WHERE AvailableFor = ?",[g],(err,result)=>{
//     if (err) {
//       console.log("An error: err.message");
//     }else{
//       if (result.length) {
//         console.log("Found");
//         respon.status(200).json({status:200, message:"We've found some properties that match your request"})
//       }else{
//         console.log("Found");
//         respon.status(200).json({status:200, message:"No Property Found Come back another time"})
//       }
//     }
//   })
// })



// app.post("/login",(req,respo)=>{
 
//   const username = req.body.user;
//   const password = req.body.pwd;
  
  
//   console.log(username);
// db.query("SELECT * FROM users where Username = ? AND Password = ?",  [username, password],(err,result)=>{

//   if (err) {
//     console.log("An error occured: ", err.message);
//     respo
//       .status(500)
//       .json({ status: 500, message: "An error occured: " + err.message });
//   } else {
    
//     if (result.length) {
      
//       console.log("User found successfully.");
     
//       console.log(result);
//       console.log(req);
//       respo
//         .status(200)
//         .json({ status: 200, message: "User found successfully.",name:username});
//     } else {
//       console.log("User not found.");
//       respo.status(400).send({ status: 400, message: "Wrong username or password." });
      
//       db.query(
//         "INSERT INTO users (Username,Password) VALUES (?,?)",
//         [username, password],
//         (err, result) => {
//           console.log(err);
//         }
//       );
//     }
//   }
// })
// })



// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`running server ${PORT}`);
// });
