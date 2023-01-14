const express = require('express');
const router = express.Router();
const Url = require('../models/urlModel')
const createDB = require('../config/db');

//const {nanoid} = require('nanoid');
//import { nanoid } from 'nanoid';


const baseUrl = "http://localhost:3001/urlapi"

createDB.sync().then(() => {
   console.log('db running ');
})

//post api call 
router.post("/", async (req ,res) => {  
    try{
        const {longUrl} = req.body;
        
        //below converting "longUrl" into short id 
        const shortId = math(floor(math.round())) 
        //longURL -> id
        // example https://localhost:3000/urlapi/id    ----> yaha jo last me 'id' hai wo 'longUrl' jisko apn ne short ID me convert kiya hai wo hai
   

        // below storing the "longUrl" and "shortId"
        const shortUrl = await Url.create({
           longUrl ,
           shortUrl: shortId
          });

        return res.status(200).json({
            status:"ok",
            shortUrl:`${baseUrl}/${shortId}`
        })
   
   
   
    } catch(e) {
        console.error(e);
        return res.status(500).send(e);
    }
})

router.get("/:short", async(req,res) => {
    let shoreId= req.params.short;
    try{
        let url =await Url.findOne({
           where:{
            shortUrl:shoreId
           } 
        });

        if (!url){
            res.status(404).send("Invalid short url ");
        }
        
        return res.redirect(url.longUrl)

    }catch(e){
        return res.status(500).send(e);
    }
})

module.exports=router;