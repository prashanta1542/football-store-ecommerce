// const mysql=require('mysql2');

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'test_database'
// });

// connection.connect((err)=>{
//     if(err){
//         console.error('Error connecting to Mysql:',err.stack);
//         return;
//     }
//     console.log('Connected to mysql as ID :'+connection.threadId);
// });

const {Sequelize}=require('sequelize');
const config=require('./config/config.json');
const sequelize = new Sequelize(config.development);

// sequelize.authenticate()
//   .then(()=>console.log(`Connected to mysql with sequelize`))
//   .catch((err)=>console.error('Unable to connect to tha database',err));

module.exports=sequelize;