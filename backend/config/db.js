import mysql2 from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'roxiler',

});

connection.connect((err)=>{
  if(err){
    console.log("connection Failed")
  }
  else{
    console.log("connection successfull")
  }
});
export default connection;