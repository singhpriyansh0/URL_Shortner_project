const {Sequelize} = require('sequelize');   // class Sequelize
const createDB = new Sequelize("test-db","user","pass", {  //create object of class sequelize and creating database inside it which will be in "./config/db.sqlite"
     dialect: "sqlite" , 
     host:"./config/db.sqlite"});
     
module.exports = createDB;